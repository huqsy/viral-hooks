const prompts = [
    {
        category: "Hook",
        prompt: "Instead of doing [common action], do this [underrated action]",
        example: "Example: Instead of stressing over the perfect thumbnail, test different styles"
    },
    {
        category: "Hook",
        prompt: "Don't do [action], before you [alternative action]",
        example: "Example: Don't apply for brand sponsorships, before you make a media kit"
    },
    {
        category: "Hook",
        prompt: "Stop wasting [resource] on [thing]",
        example: "Example: Stop wasting money on stock images, here's how to get them for free"
    },
    {
        category: "Hook",
        prompt: "How I [do this]",
        example: "Example: How I make my twitch emote designs"
    },
    {
        category: "Hook",
        prompt: "Good [example] vs Bad [example]",
        example: "Example: Good cross hair positioning vs Bad cross hair positioning"
    },
    {
        category: "Hook",
        prompt: "Watch me [do this]",
        example: "Example: Watch me package my order for my small business"
    },
    {
        category: "Hook",
        prompt: "Here's how to [highly desired action] you'll actually stick to",
        example: "Example: Here's how to make a morning routine you'll actually stick to"
    },
    {
        category: "Hook",
        prompt: "[Doing this] so you don't have to",
        example: "Example: Finding all easter eggs in Elden Ring so you don't have to"
    },
    {
        category: "Hook",
        prompt: "Here is [interesting thing] you need to check out",
        example: "Example: Here are Procreate brushes you need to check out"
    },
    {
        category: "Hook",
        prompt: "Here is where I buy my [desired item]",
        example: "Example: Here is where I buy my outfits for my cosplays"
    },
    {
        category: "Hook",
        prompt: "PSA: [reminder]",
        example: "Example: PSA: Take breaks as you build your small business"
    },
    {
        category: "Hook",
        prompt: "POV: [meme]",
        example: "Example: POV: Your teammate left you in a 1v3"
    },
    {
        category: "Hook",
        prompt: "This is your sign to [encouraging action]",
        example: "Example: This is your sign to say fuck it and start selling your digital art as stickers"
    },
    {
        category: "Hook",
        prompt: "Let's [do this] together",
        example: "Example: Let's set up my gaming PC together"
    },
    {
        category: "Hook",
        prompt: "[Things] you didn't know you wanted",
        example: "Example: Laptop accessories you didn't know you wanted"
    },
    {
        category: "Hook",
        prompt: "[Resources] you need to get if you're a [type of person]",
        example: "Example: Note taking apps you need to get if you're a student"
    },
    {
        category: "Hook",
        prompt: "How to be [good quality] in [time period]",
        example: "Example: How to be more productive in the summer"
    },
    {
        category: "Hook",
        prompt: "Here's [something] I wish I knew earlier",
        example: "Example: Here's a Photoshop hack I wish I knew earlier"
    },
    {
        category: "Hook",
        prompt: "X [topic] essentials",
        example: "Example: 5 small business essentials"
    },
    {
        category: "Hook",
        prompt: "Here's [something] that you need to try",
        example: "Example: Here's a study method you need to try if you're a student"
    },
    {
        category: "Hook",
        prompt: "I'm going to show you the BEST [thing] in less than X seconds",
        example: "Example: I'm going to show you the BEST graphics settings in Fortnite in less than 20 seconds"
    },
    {
        category: "Hook",
        prompt: "[Topic] tips, [Theme] edition",
        example: "Example: Cooking tips, Broke college student edition"
    },
    {
        category: "Hook",
        prompt: "X [resources] to help you with [benefit]",
        example: "Example: 5 stream widgets to help you get more views"
    },
    {
        category: "Hook",
        prompt: "Here are [things] you need to start doing",
        example: "Example: Here are 3 habits you need to start doing every night"
    },
    {
        category: "Hook",
        prompt: "The [thing] that you need now if you're [type of person]",
        example: "Example: The book that you need now if you're a freelance artist"
    },   
];

let lastPrompt = null;

document.getElementById('generate-button').addEventListener('click', function() {
    let chosenPrompt;
    do {
        chosenPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    } while (chosenPrompt === lastPrompt);

    lastPrompt = chosenPrompt;
    

    // Show the prompt display and include the category
    // Added an extra line break between the category and the prompt
    const promptDisplay = document.getElementById('prompt-display');
    promptDisplay.style.display = 'block';
    promptDisplay.innerHTML = `<strong>${chosenPrompt.category}</strong><br><br>${chosenPrompt.prompt}<div class="divider"></div>${chosenPrompt.example}`;

});
