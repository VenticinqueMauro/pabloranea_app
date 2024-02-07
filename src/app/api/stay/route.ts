import { connectDB } from "@/lib/mongodb";
import Event from "@/models/event";
import Stay from "@/models/stay";
import dayjs from "dayjs";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {

    try {
        await connectDB();

        const stays = await Stay.find();

        if (!stays) {
            return NextResponse.json({ message: "No stays found" }, {
                status: 400
            });
        }

        const staysWithEventsPromises = stays.map(async (stay) => {
            const startDate = stay.startDate;
            const endDate = stay.endDate;
            const location = stay.location;

            const events = await Event.find({
                date: {
                    $gte: startDate,
                    $lte: endDate
                },
                location: location
            });

            return {
                ...stay.toJSON(),
                events: events || []
            };
        });

        const staysWithEvents = await Promise.all(staysWithEventsPromises);

        return NextResponse.json(staysWithEvents);

    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return NextResponse.json({
                message: error.message
            }, {
                status: 400
            });
        }
    }

    return NextResponse.json({ message: "Error" }, {
        status: 400
    });
}

export async function POST(request: NextRequest) {

    const { location, startDate, endDate, color, description } = await request.json();

    try {
        await connectDB();

        const staysFound = await Stay.findOne({
            $or: [
                { startDate: { $gte: startDate, $lte: endDate } },
                { endDate: { $gte: startDate, $lte: endDate } }
            ]
        });

        if (staysFound) {
            return NextResponse.json({ message: "Stays overlap with existing stays" }, {
                status: 400
            });
        }

        const stays = new Stay({
            _id: new mongoose.Types.ObjectId(),
            location,
            startDate: dayjs(startDate).format("YYYY-MM-DD"),
            endDate: dayjs(endDate).format("YYYY-MM-DD"),
            color,
            description,
        });

        const savedStays = await stays.save();

        return NextResponse.json({
            location: savedStays.location,
            startDate: savedStays.startDate,
            endDate: savedStays.endDate,
            description: savedStays.description,
            color: savedStays.color,
        })


    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return NextResponse.json({
                error: error.message
            }, {
                status: 400
            });
        }
    }

}

export async function DELETE(request: NextRequest) {

    try {
        await connectDB();

        await Stay.deleteMany({});

        return NextResponse.json({ message: "All stays deleted successfully" });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}