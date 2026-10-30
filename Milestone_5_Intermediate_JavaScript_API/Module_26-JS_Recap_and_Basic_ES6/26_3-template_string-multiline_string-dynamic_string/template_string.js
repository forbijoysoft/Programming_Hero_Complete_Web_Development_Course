/**
 * ----------- Template String -------------
 * জাভাস্ক্রিপ্টে Template String (বা Template Literal) হলো স্ট্রিং লেখার একটি আধুনিক এবং শক্তিশালী পদ্ধতি। সাধারণ সিঙ্গেল কোট (' ') বা ডাবল কোট (" ") এর বদলে এটি ব্যাকটিক (` `) চিহ্ন (কী-বোর্ডের Tab কী-এর উপরে থাকে) ব্যবহার করে লেখা হয়।
 * সহজ কথায়, স্ট্রিংয়ের ভেতরে ভ্যারিয়েবল বসানো এবং মাল্টি-লাইন টেক্সট লেখার কাজকে সহজ করার জন্যই Template String ব্যবহার করা হয়।
 * 
 * কেন Template String ব্যবহার করব?
        * ১. সহজে ভ্যারিয়েবল বসানো (String Interpolation): টেম্পলেট স্ট্রিংয়ে সরাসরি ${variable} ব্যবহার করে স্ট্রিংয়ের ভেতরেই ভ্যারিয়েবল বসানো যায়।
        * ২. মাল্টি-লাইন টেক্সট (Multi-line Strings): 
        * ৩. কোড পরিষ্কার রাখা: 
        
 * 
 */



/**
 * মাল্টি-লাইন টেক্সট (Multi-line Strings): সাধারণ স্ট্রিংয়ে নতুন লাইনে যেতে হলে \n ব্যবহার করতে হতো। টেম্পলেট স্ট্রিংয়ে কিবোর্ডে এন্টার দিয়ে যেভাবে খুশি সেভাবেই টেক্সট সাজানো যায়।
 */

       let multiLine = `This is Brian.
       22 Years Old.
       I love teaching.`
       // console.log(multiLine);

/**
 *  সহজে ভ্যারিয়েবল বসানো (String Interpolation): আগে String আর Variable যোগ করতে অনেকগুলো প্লাস (+) সাইন ব্যবহার করতে হতো, যা দেখতে খুব ঝামেলার ছিল। টেম্পলেট স্ট্রিংয়ে  সরাসরি ${variable} ব্যবহার করে স্ট্রিংয়ের ভেতরেই ভ্যারিয়েবল বসানো যায়।
 */

       let channelName = 'Pomodoro With Bijoy';
       let bio = `This is Bijoy,
       I'm learning web dev,
       I prefer pomodoro learning. 
       I have a YouTube channel called ${channelName}`;
       // console.log(bio);


/**
 * Template string এর ভিতরেই condition use করা যায়। কিন্ত if/else condition ব্যবহার করা যায় না, ternary operator ব্যবহার করে condition এর কাজটি করতে হয়। ternary operator --> condition ? "true value" : "false value";  কনডিশনের কাজটি মূলত ${এর ভিতরে লিখতে হবে}
 */
       let name = "Brian";
       let age = 20;

       let personalInfo = `I am ${name},
       I'm ${age} years old.
       ${age > 18 ? "I'm an adult" : "I'm not an adult"}.
       I'm a future software Engineer.`;
       // console.log(personalInfo);

