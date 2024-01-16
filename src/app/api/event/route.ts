import { connectDB } from "@/lib/mongodb";
import Event from "@/models/event";
import dayjs from "dayjs";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {

    try {
        await connectDB();

        const events = await Event.find({})

        if (!events) {
            return NextResponse.json({ message: 'No events found' }, {
                status: 400
            })
        }

        return NextResponse.json(events)

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({
                message: error.message
            }, {
                status: 400
            });
        }
    }
}

export async function POST(request: NextRequest) {

    const { title, date, time, location, description } = await request.json();

    try {
        await connectDB();

        const eventsFound = Event.findOne({ title })

        if (!eventsFound) {
            return NextResponse.json({ message: "Events overlap with existing events" }, {
                status: 400
            });
        }

        const event = new Event({
            title,
            date: dayjs(date).format("YYYY-MM-DD"),
            time,
            location,
            description
        })

        const savedEvent = await event.save();

        return NextResponse.json({
            title: savedEvent.title,
            date: savedEvent.date,
            time: savedEvent.time,
            location: savedEvent.location,
            description: savedEvent.description,
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

        await Event.deleteMany({});

        return NextResponse.json({ message: "All events deleted successfully" });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}