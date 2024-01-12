import { connectDB } from "@/lib/mongodb";
import Stay from "@/models/stay";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;

    try {
        await connectDB();

        const stayFound = await Stay.findById(id).populate('events');

        if (!stayFound) {
            return NextResponse.json({ message: "Stay not found" }, { status: 400 });
        }

        return NextResponse.json(stayFound)
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest, { params }: { params: { [key: string]: string } }) {

    const id = params.id;

    try {
        await connectDB();

        const stayFound = await Stay.findById(id);

        if (!stayFound) {
            return NextResponse.json({ message: "Stay not found" }, { status: 400 });
        }

        const { location, startDate, endDate, color, status, events } = await request.json();

        if (location) {
            stayFound.location = location;
        }
        if (startDate) {
            stayFound.startDate = startDate;
        }
        if (endDate) {
            stayFound.endDate = endDate;
        }
        if (color) {
            stayFound.color = color;
        }
        if (status) {
            stayFound.status = status;
        }
        if (events) {
            stayFound.events = events;
        }

        const updatedStay = await stayFound.save();

        return NextResponse.json({
            location: updatedStay.location,
            startDate: updatedStay.startDate,
            endDate: updatedStay.endDate,
            color: updatedStay.color,
            status: updatedStay.status,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }

}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {

    const id = params.id;

    try {
        await connectDB();

        const stayFound = await Stay.findById(id);
        if (!stayFound) {
            return NextResponse.json({ message: "Stay not found" }, { status: 400 });
        }

        await stayFound.deleteOne();

        return NextResponse.json({ message: "Stay deleted successfully" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }

}



