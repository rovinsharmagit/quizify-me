import { strict_output } from "@/lib/gpt";
import { quizCreationSchema } from "@/schemas/form/quiz";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const POST = async (req: Request, res: Response) => {
    try {
        const body = await req.json();
    const {amount, topic, type} = quizCreationSchema.parse(body)
    let questions: any;
    if (type === 'mcq') {
        questions = await strict_output(
            "You are a helpful AI that is able to generate a pair of question and answers, the length of each answer should not be more than 15 words, store all the pairs of answers and questions in a JSON array",
            `You are to generate a random hard open-ended questions about ${topic}`,
        
        {
            question: "question",
            answer: "answer with max length of 15 words",
        }
        );
    }
    return NextResponse.json ({
        questions
    },{
        status: 200,
    });
    } catch (error) {
        if (error instanceof ZodError) {
            return NextResponse.json (
            {
                error: error.issues
            },
            {
                status: 400,
            }
            );
        }
    } 
};