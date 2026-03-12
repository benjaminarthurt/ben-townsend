# Source: https://bentownsend.com/article/enhancing-birdwatching-ai-technology-13

Submitted by
bentownsend
on
Thu, 04/25/2024 - 08:10
Birdwatching has been a long-time hobby of mine, but I've found that modern life often makes it difficult to find the time to watch, identify, and catalog the birds that visit my yard. The patience—and presence—required to spot new and rare species often conflicts with not only my busy work schedule but also my ADHD. However, thanks to advances in technology, I've found a way to enjoy this activity more easily. I've embarked on a project that combines my passion for birdwatching with my skills in technology, resulting in a live-streamed bird camera that anyone can access online. Here’s how I did it.
**Camera Setup**
[![](/sites/default/files/inline-images/Bird%20Cam%204-24-2024%2C%203-56-49%20PM.jpg)](https://www.bentownsend.com/sites/default/files/inline-images/Bird%20Cam%204-24-2024%2C%203-56-49%20PM.jpg)
At the heart of my setup is the [Reolink RLC-822A](https://a.co/d/1EGLno5), a 4K dome camera that boasts impressive features suitable for capturing the finest details of my backyard bird activity. This camera offers high resolution, optical zoom, auto-focus, and a wide-angle lens, making it an ideal choice for monitoring the bird feeders, bird bath, and surrounding bushes in my garden. The ability to capture high-quality audio is another plus, ensuring that viewers can not only see but also hear the birds, as well as use as a feed for other parts of this project.
I mounted the camera to a piece of weather treated wood and mounted that on a pole near the feeders, from my networking rack I ran a length of Category 6 cable rated for outdoor/direct burial usage. Connecting this cable from my POE switch to the camera not only allows network access for the camera outdoors, but also supplies power for the camera to operate. The final step in setting up my camera was to assign it a static IP address on my home network, this would ensure that the other software in this project would be able to consistently find and access the RTSP feed from the camera. Finding the correct URL to use for the camera is the key, to being able to integrate it into other pieces of this project, thankfully Reolink has a handy [article published](https://support.reolink.com/hc/en-us/articles/900000630706-Introduction-to-RTSP/) on their website that makes this information available easily. For other camera manufacturers it is going to be different than mine, as well as dependent on network configuration.
**Setting up the Live Stream**
To share the wide diversity of bird species that frequent my yard with the world, I use the [datarhei Restreamer](https://docs.datarhei.com/restreamer/getting-started/quick-start) project. This open-source software allows me to stream the live feed from my camera directly to my website and YouTube channel. Running on a dedicated Docker virtual machine within my Proxmox cluster, and managed via Portainer, the Restreamer makes continuous streaming possible without any hassle. You can catch the live action on my personal [YouTube channel](https://www.youtube.com/@MrBenjamintownsend/streams) or by visiting my [live stream page](https://live.bentownsend.com).
**Intelligent Audio Analysis with BirdNET-Pi**
One of the key components of my birdwatching project is [BirdNET-Pi](https://github.com/MatthewBCooke/BirdNET-Pi), a tool that leverages artificial intelligence to recognize and identify bird species based on their calls. This software is particularly intriguing because it employs machine learning models that were originally developed by researchers at Cornell University, which is located not far from where I live. This connection adds a local touch to the technology while also utilizing world-class research to enhance our understanding of avian life.
[![](/sites/default/files/inline-images/birdnet1.png)](https://www.bentownsend.com/sites/default/files/inline-images/birdnet1.png)
Typically BirdNET-Pi is designed to operate on a low cost Raspberry PI single board computer, however I opted to place my implementation on a Linux Container (LXC) on a Proxmox node, directly analyzing the audio streams captured by my Reolink camera. The software processes these audio feeds in small, manageable segments. It uses a trained AI model to detect and identify the bird species audible in the recordings. The accuracy of BirdNET-Pi in recognizing a wide range of bird calls makes it an invaluable part of the project.
The results from BirdNET-Pi are not only recorded but also displayed through a user-friendly web interface, which is publicly accessible at [Birds.BenTownsend.com](https://birds.bentownsend.com). This interface presents a real-time log of bird species identified by the AI, offering bird enthusiasts and researchers a valuable resource for observing and studying the diversity of birds in my area. Additionally, this feature enhances the educational value of the live stream, allowing viewers to gain insights into the bird species they are watching and listening to.
[![Chart depicting the heard bird calls over time.](/sites/default/files/inline-images/newplot.png)](/sites/default/files/inline-images/newplot.png)
[![Screen capture from the BirdNet-PI software](/sites/default/files/styles/max_325x325/public/2024-04/birdnet.png?itok=xflZ2H5e)](/article/enhancing-birdwatching-ai-technology-13)
Tags
[birdwatching](/taxonomy/term/40)
[technology](/taxonomy/term/41)
[livestreaming](/taxonomy/term/42)
[wildlife](/taxonomy/term/43)
[artificial intelligence](/taxonomy/term/44)
[machine learning](/taxonomy/term/45)
[Cornell University](/taxonomy/term/46)
[BirdNET-Pi](/taxonomy/term/47)
[Reolink camera](/taxonomy/term/48)
[backyard birds](/taxonomy/term/49)
[nature education](/taxonomy/term/50)
* [Log in](/user/login?destination=/article/enhancing-birdwatching-ai-technology-13%23comment-form) to post comments