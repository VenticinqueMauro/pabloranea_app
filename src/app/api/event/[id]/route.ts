import { connectDB } from "@/lib/mongodb";
import Event from "@/models/event";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;

    try {
        await connectDB();

        const eventFound = await Event.findById(id);

        if (!eventFound) {
            return NextResponse.json({ message: "Event not found" }, { status: 400 });
        }

        return NextResponse.json(eventFound)
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest, { params }: { params: { [key: string]: string } }) {

    const id = params.id;

    try {
        await connectDB();

        const eventFound = await Event.findById(id);

        if (!eventFound) {
            return NextResponse.json({ message: "Stay not found" }, { status: 400 });
        }

        const { status } = await request.json();

        if (status) {
            eventFound.status = status;
        }

        await eventFound.save();

        return NextResponse.json({
            message: 'The status was changed successfully',
        }, {
            status: 200,
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

        const eventFound = await Event.findById(id);
        if (!eventFound) {
            return NextResponse.json({ message: "Event not found" }, { status: 400 });
        }

        await eventFound.deleteOne();

        return NextResponse.json({ message: "Event deleted successfully" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }

}



