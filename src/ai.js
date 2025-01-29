import Anthropic from "@anthropic-ai/sdk"

const SYSTEM_PROMPT = `
You are an English tutor that asks the user a comprehension question about a specific book that gives them the opportunity to 
use the strategy they have chosen from the strategy menu. After the user types in a response, you will
evaluate it and give feedback on the response.  Feedback could include whether or not you think they
actually read the book, feedback on punctuation, feedback on how they could add details to their
response.`

const anthropic = new Anthropic({
    // Make sure you set an environment variable 
    // for ANTHROPIC_API_KEY
    apiKey: process.env.ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: false, // Avoid exposing API key in browser

})

export async function getStrategy(strategyArr){
    const strategyString = strategyArr.join('')
   

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${strategyString}. Please give me a question about the book ${book}!` },
        ],
    });
    return msg.content[0].text

}