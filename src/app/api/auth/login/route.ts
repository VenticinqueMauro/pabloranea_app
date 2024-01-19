import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const { email, password } = await req.json();

    try {
        await connectDB();

        const userFound = await User.findOne({ email })

        if (!userFound) {
            return NextResponse.json({ error: 'This email is not associated with any registered account' }, { status: 404 });
        }

        const hashPassword = userFound.password;

        const compareHashPassword = bcrypt.compareSync(password, hashPassword);

        if (!compareHashPassword) {
            return NextResponse.json({ error: 'Incorrect password. Please check and try again.' }, { status: 401 });
        }

        const fullname = userFound.fullname;

        const tokenData = {
            exp: Math.floor(Date.now() / 100) + 60 * 60 * 24 * 30,
            email,
            fullname
        }

        const token = jwt.sign(tokenData, `${process.env.JWT_KEY}`)


        cookies().set('PR_app', token, { secure: true })

        return NextResponse.json({ message: 'Login Succesfull' }, { status: 200 })


    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({
                error: `Login failed ${error.message}`
            }, {
                status: 400
            })
        }
    }
}