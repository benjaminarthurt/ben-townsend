# Source: https://bentownsend.com/article/home-labbing-14

Submitted by
bentownsend
on
Sun, 05/19/2024 - 13:22
Welcome to my home lab, a space dedicated to learning, experimentation, and a bit of fun. What started as a curiosity has grown into a robust environment where I run various services to support my consulting business and enjoy some entertainment on the side.
In this blog post, I'll take you through the ins and outs of my home lab setup. From the hardware I use to the network configuration, virtualization, and containerization strategies, you'll get an inside look at how everything fits together. Whether you're interested in setting up your own home lab or just curious about mine, I hope you'll find some valuable insights and maybe even some inspiration.
Let's dive in and explore the systems and services that keep my home lab running smoothly.
### **1. Hardware and Network Infrastructure**
#### **Hardware Details**
My home lab is powered by five older Dell and HP desktop PCs, each equipped with Intel i5 processors and 12-16 GB of memory. These machines might not be the latest and greatest, but they serve the purpose well. Each node in the setup has two 1 TB hard drives, providing ample storage for the various VMs and containers I run. These five nodes run Proxmox, a powerful virtualization platform that allows me to manage and deploy VMs and LXC containers efficiently.
#### **Networking Setup**
A solid network foundation is crucial for any home lab, and mine is no exception. Here's a detailed breakdown of the network infrastructure:
* **Managed Switches:** My network relies on Netgear managed switches for seamless connectivity and traffic management. The setup includes three separate switches connected to the firewall using trunk ports that pass VLANs. Each switch is configured to allow some or all VLANs to the access ports. This flexibility ensures that devices on the same VLAN can communicate efficiently, while also maintaining segregation where needed.
* **POE Switch:** One of these switches is a Power Over Ethernet (POE) switch, which powers multiple POE cameras around the property. This switch also supports a few Raspberry PIs with POE hats, used for various projects and monitoring tasks. The ability to power these devices directly through the network simplifies the setup and reduces the need for additional power adapters.
* **Meraki Go Firewall and APs:** The Meraki Go Firewall and access points (APs) form the backbone of my network security and wireless connectivity. This hardware provides robust remote monitoring and alerting capabilities, allowing me to manage the AP and firewall remotely. However, I am considering swapping this hardware out in the future for an open-source solution such as pfSense. The move to pfSense would offer more configurability and control over my network settings, enhancing my ability to tailor the network to my specific needs.
* **VLAN Configuration:** VLANs (Virtual Local Area Networks) play a critical role in my network setup. They allow me to segregate and manage network traffic effectively. By separating personal, consulting, and public/untrusted devices, I maintain better security and performance across the network. Trunk ports carry multiple VLANs between the firewall and the switches, ensuring that each device only has access to the appropriate network segments.
With these hardware and network components in place, my home lab provides a stable and secure environment for running a variety of services. This setup forms the foundation upon which all other services and experiments are built.
### **2. Virtualization and Containerization**
#### **Proxmox**
Proxmox serves as the backbone of my virtualization environment, running on all five nodes in my home lab. This powerful open-source platform allows me to manage and deploy virtual machines (VMs) and Linux containers (LXC) efficiently. Here’s how I use Proxmox in my setup:
* **Virtual Machines:** Proxmox enables me to create and manage multiple VMs, each dedicated to specific tasks or services. This isolation ensures that different services do not interfere with each other, enhancing both performance and security.
* **LXC Containers:** Lightweight and efficient, LXC containers are perfect for running applications with lower resource requirements. They provide the benefits of virtualization with minimal overhead, making them ideal for various services that do not need the full capabilities of a VM.
* **Resource Management:** Proxmox’s web-based interface offers a comprehensive view of resource utilization across all nodes, allowing me to optimize performance and ensure that each VM and container has the necessary resources.
#### **Docker and Portainer**
Containerization is another critical aspect of my home lab, primarily managed through Docker, which is running inside LXC containers on Proxmox. This setup allows for uniform manageability and easy migration between physical hardware. Docker’s flexibility and efficiency make it an excellent choice for running a wide range of services. Here’s how Docker fits into my setup:
* **Service Management:** Docker containers host several key services in my home lab. By containerizing these services, I can easily manage, update, and deploy them without affecting the underlying system.
* **Segregation and Isolation:** Docker ensures that each service runs in its isolated environment, preventing conflicts and making it easier to troubleshoot issues.
* **Portainer:** To simplify Docker management, I use Portainer, a powerful management tool that provides a single pane of glass view of all Docker containers. With Portainer, I can:
  + **Monitor and Manage Containers:** Easily monitor the status of all running containers and manage them through an intuitive web interface.
  + **Deploy New Services:** Quickly spin up new containers and services without needing to delve into command-line operations.
  + **Update and Maintain:** Efficiently handle updates and maintenance tasks, ensuring that all containers are running the latest versions.
Although I am not currently running Docker Swarms or Kubernetes, these options remain on my radar for potential future exploration. For now, the combination of Proxmox, Docker, and Portainer provides a robust framework for virtualization and containerization in my home lab. This setup allows me to run a diverse range of services efficiently, ensuring that resources are optimally utilized and that each service operates within a secure and isolated environment.
### **3. Storage Solutions**
#### **TrueNAS**
TrueNAS is the cornerstone of my home lab's storage infrastructure, providing a reliable and efficient solution for data management. Here’s how I utilize TrueNAS in my setup:
* **RAIDZ1 Configuration:** My TrueNAS setup uses a RAIDZ1 configuration with three 4 TB disks, resulting in a usable storage capacity of just over 7 TB. This setup offers a good balance between redundancy and usable space, ensuring data integrity while maximizing storage capacity.
* **Content Storage:** TrueNAS primarily serves as the main storage repository for all my data. This includes media files, backups, and various other types of content. The data is accessible from multiple devices and services within my network, ensuring that everything I need is readily available.
#### **Data Access Methods**
To facilitate seamless access to data, I employ multiple methods tailored to different devices and use cases:
* **SMB Shares:** I use SMB (Server Message Block) shares to provide easy access to data from Windows devices. This allows for straightforward file sharing and access across all my Windows machines.
* **NFS Shares:** For my Linux servers, NFS (Network File System) shares are utilized. NFS offers a robust and efficient way to share files between Linux systems, ensuring that all my servers can access the data they need without any compatibility issues.
* **NextCloud Integration:** For sync and remote access, I integrate TrueNAS with NextCloud. NextCloud runs on my Nginx server with a MySQL backend, providing a user-friendly interface for accessing and synchronizing files. This setup enables remote access to my data from anywhere, ensuring that I can stay connected to my home lab even when I'm on the go.
#### **Media Storage**
TrueNAS also plays a crucial role in managing media storage for my Plex server and other media-related services:
* **Plex Media Server:** All my media files are stored on TrueNAS and are accessed by Plex. This allows me to stream media to various devices on my network or remotely, providing a seamless entertainment experience.
* **Frigate Footage:** Security camera footage managed by Frigate is stored on TrueNAS. This setup ensures that all recordings are centralized and easily accessible for review and analysis.
By leveraging TrueNAS for my storage needs, I can ensure that my data is secure, accessible, and well-organized. The combination of SMB and NFS shares, along with NextCloud integration, provides a versatile and efficient storage solution that meets the diverse needs of my home lab.
### **4. Network and Security**
#### **Network Access and Security**
Ensuring secure and efficient network access is a key aspect of my home lab. Here's how I manage network access and security:
* **Nginx Proxy:** I use an Nginx proxy to provide secure access to various services. The proxy is exposed on port 443 through the firewall, offering an extra layer of authentication and protection for services like NextCloud and Plex. This setup ensures that sensitive services are shielded from direct exposure to the internet, enhancing security.
* **Cloudflare Tunnel:** For public-facing services, I leverage Cloudflare Tunnel. This allows me to securely expose HTTPS resources without revealing my public IP address. Cloudflare's protections, including DDoS mitigation and web application firewall (WAF), add an extra layer of security. This setup is crucial for maintaining the integrity and availability of my public services.
* **Twingate Tunnel:** Twingate is used to access non-exposed services within my network, primarily for remote management. This solution enables secure remote access without the need for a VPN, simplifying connectivity while maintaining robust security standards.
#### **Security Monitoring**
Maintaining a secure environment requires continuous monitoring and alerting. I use several tools to achieve this:
* **Wazuh:** Wazuh is a comprehensive security monitoring tool that provides real-time analysis and alerts for various security issues. It monitors changes and potential threats across most services in my home lab, ensuring that I am promptly alerted to any suspicious activities or configurations.
* **Technitium DNS Server:** Technitium DNS Server supports my internal network by providing DNS services, including caching, filtering, and ad blocking. This enhances network performance and security by reducing unnecessary traffic and blocking malicious domains. Technitium also helps in maintaining a well-organized and secure internal network.
These combined network and security measures ensure that my home lab remains secure, efficient, and accessible. By using tools like Nginx Proxy, Cloudflare Tunnel, Twingate, Wazuh, and Technitium DNS, I can maintain a well-protected environment that supports a wide range of services and applications.
### **5. Media and Entertainment**
My home lab isn't just about work and learning; it's also a hub for media and entertainment. Here's how I manage and enjoy various forms of digital entertainment:
#### **Plex Media Server**
Plex serves as the cornerstone of my media setup, providing a seamless way to organize and stream my media library. Here's how I utilize Plex:
* **Media Storage:** All my media files, including movies, TV shows, music, and photos, are stored on my TrueNAS server. This centralized storage solution makes it easy to manage and access media content.
* **Streaming:** Plex allows me to stream media to any device on my network, including smart TVs, tablets, smartphones, and computers. Whether I'm at home or on the road, I can access my media library from anywhere with an internet connection.
* **Media Conversion:** I've converted my physical media collection to digital format using HandBrake on Windows. This process involves ripping DVDs and Blu-rays and encoding them into a format that Plex can stream efficiently. This not only preserves my media collection but also makes it much more accessible.
#### **Restreamer**
Restreamer adds an interesting dimension to my media setup by enabling live streaming from my property:
* **Bird Feeder Camera:** I have a Reolink camera pointed at my bird feeders, capturing live footage of visiting birds. Restreamer rebroadcasts this footage to my public website and my YouTube Live channel, providing a window into the wildlife activity around my home.
* **Public Sharing:** This setup allows me to share interesting and relaxing live content with friends, family, and the wider internet community, adding a unique touch to my media and entertainment offerings.
#### **Additional Media Projects**
While Plex and Restreamer form the core of my media setup, there are other interesting media-related projects in my home lab:
* **NextCloud Integration:** NextCloud not only serves as a file sync and remote access solution but also integrates with my media setup. It allows me to access and share media files stored on my TrueNAS server easily.
* **Home Assistant:** Home Assistant integrates with various media devices in my home, providing automation and control. For example, I can use Home Assistant to automatically turn on the TV and start playing a movie on Plex when certain conditions are met, like when I arrive home after work.
By leveraging tools like Plex, Restreamer, and Home Assistant, my home lab offers a rich and versatile media and entertainment experience. This setup not only enhances my personal enjoyment but also allows me to share unique content with others, showcasing the diverse capabilities of a well-configured home lab.
### **6. Home Automation**
Home automation is a significant part of my home lab, making daily life more convenient and efficient through the integration and automation of various IoT devices. Central to this setup is Home Assistant, a powerful and flexible platform that ties everything together.
#### **Home Assistant Setup**
I run Home Assistant and Home Assistant OS on an Atomic PI board, housed inside a custom enclosure. This setup provides reliable hardware with several built-in connectivity options:
* **Built-in Connectivity:** The Atomic PI board comes with Ethernet, WiFi, and Bluetooth. This variety of connectivity options allows me to integrate and manage a wide range of IoT devices effortlessly.
* **Zigbee Support:** For Zigbee connectivity, I use a USB dongle connected to the Atomic PI board. This enables communication with Zigbee-enabled devices, expanding the range of compatible IoT equipment.
* **Redundancy and Bridging:** Having both Ethernet and WiFi connectivity ensures network redundancy, enhancing reliability. Additionally, it allows connections to multiple networks, effectively bridging my secure network and my IoT network. This setup ensures that critical automation tasks continue running smoothly even if one network connection fails.
#### **Home Automation Capabilities**
Home Assistant allows me to automate and control various aspects of my home environment. Here are some of the key functionalities:
* **Device Integration:** Home Assistant integrates with numerous smart devices, including smart bulbs, TVs, light switches, air conditioning units, fans, furnaces, security cameras, garden moisture sensors, hose valves, door locks, and garage doors.
* **Environmental Monitoring:** The system monitors proximity, presence, motion, temperature, humidity, brightness levels, and my location. This data is used to trigger automations that enhance convenience and efficiency. For example, lights can be turned on or off based on room occupancy, and the thermostat can be adjusted according to the current temperature and presence of people.
* **Energy Efficiency:** Automations are designed to save energy wherever possible. For instance, lights and appliances are turned off automatically when rooms are unoccupied, and irrigation systems are optimized based on garden moisture levels.
#### **Remote Access and Support**
To ensure easy remote access and to support the ongoing development of Home Assistant, I subscribe to Nabu Casa's services:
* **Nabu Casa:** This subscription not only supports the developers behind Home Assistant but also provides seamless and secure remote access to my Home Assistant instance. With Nabu Casa, I can control and monitor my home automation setup from anywhere, without needing to configure complex remote access solutions.
By leveraging Home Assistant on robust hardware like the Atomic PI board and subscribing to Nabu Casa's services, my home automation setup is both reliable and versatile. This integration of various IoT devices and environmental monitoring capabilities significantly enhances the comfort, efficiency, and security of my home, showcasing the powerful possibilities of a well-configured home automation system.
#### **Frigate and Reolink Cameras**
Frigate and Reolink cameras play a significant role in enhancing the security and automation capabilities of my home lab. Here's how they integrate into the overall system:
* **Security Monitoring:** I use Reolink cameras strategically placed around my property to monitor different areas. These cameras provide high-quality video feeds that are essential for maintaining a secure environment.
* **Frigate Integration:** Frigate, running on my home lab infrastructure, processes the video feeds from the Reolink cameras. It utilizes the Google Coral TPU to perform real-time object detection, identifying people, animals, vehicles, and other objects.
* **Automation Triggers:** The integration of Frigate with Home Assistant allows for sophisticated automation based on object detection. For example:
  + **License Plate Detection:** When Frigate detects my car’s license plate in the driveway, it can trigger automations such as opening the garage door.
  + **Motion Detection:** Detecting motion around the property can trigger various actions, like turning on exterior lights, sending notifications, or activating security alarms.
* **Event Recording:** All detected events and video footage are recorded and stored on my TrueNAS server. This ensures that I have a comprehensive log of activities around my property, which can be reviewed and analyzed as needed.
* **Real-Time Alerts:** Frigate can send real-time alerts to my devices through Home Assistant, ensuring that I am promptly informed of any significant events. These alerts can be tailored based on the type of object detected, providing relevant information without unnecessary noise.
By integrating Frigate with Reolink cameras, I have a robust and intelligent security system that not only monitors but also actively responds to events around my property. This setup enhances the overall security of my home while providing valuable automation capabilities that simplify daily tasks and improve convenience.
### **7. Automation and Monitoring**
Automation and monitoring are critical components of my home lab, enabling efficient management of tasks and ensuring the continuous availability of services. Here’s how I use various tools to achieve these goals:
#### **N8n**
N8n is an open-source workflow automation tool that helps streamline various tasks within my consulting business. Here’s how I leverage N8n:
* **Social Media Automation:** N8n automates the process of posting to social media platforms. By integrating with APIs of platforms like Twitter, LinkedIn, and Facebook, N8n helps schedule and publish posts, ensuring consistent online presence without manual intervention.
* **Task Automation:** Beyond social media, N8n automates repetitive tasks, such as data synchronization between services, sending reminders, and updating spreadsheets. This reduces the manual workload and increases efficiency in daily operations.
#### **Uptime Kuma**
Uptime Kuma is a self-hosted monitoring tool that keeps an eye on the availability and performance of services both in my home lab and in the cloud. Here’s how I use Uptime Kuma:
* **Service Monitoring:** Uptime Kuma monitors all critical services hosted in my home lab, such as Plex, NextCloud, and Home Assistant. It checks the availability of these services at regular intervals and alerts me if any service goes offline.
* **Cloud Service Monitoring:** In addition to local services, Uptime Kuma monitors cloud-based services used in my consulting business. This ensures that I am aware of any disruptions that could affect my business operations.
* **Automated Alerts and Actions:** When Uptime Kuma detects an issue, it triggers automated alerts through various channels such as email, SMS, or instant messaging. In some cases, it can also initiate corrective actions, like rebooting a service or server, to minimize downtime and restore normal operations quickly.
#### **GitEA**
GitEA is a self-hosted Git service that plays a crucial role in my development and infrastructure management:
* **Code Repository:** GitEA stores code for personal projects, professional work, and infrastructure as code (IaC) repositories. This includes Docker Compose files, scripts, and configuration files.
* **Collaboration and Version Control:** By using GitEA, I can manage version control and collaborate on code with others. This ensures that all changes are tracked, and multiple versions of the code are available for review and rollback if needed.
By integrating N8n, Uptime Kuma, and GitEA into my home lab, I achieve a high level of automation and monitoring. These tools not only streamline business operations and enhance security but also ensure the reliability and availability of services, making my home lab a robust and efficient environment for various activities.
### **8. Unique Projects**
My home lab hosts several unique and interesting projects that highlight the versatility and capabilities of my setup. Here are some of the standout projects:
#### **Birdnet-PI**
Birdnet-PI is a fascinating project that uses AI to monitor bird species around my property:
* **AI-Powered Bird Detection:** Birdnet-PI runs as an LXC container in Proxmox. It leverages machine learning algorithms to analyze audio from my security cameras, identifying bird species based on their calls and songs.
* **Data Collection:** This project helps me collect valuable data on the bird species that visit my property, contributing to both personal interest and broader ecological studies.
* **Blog Article:** For a deeper dive into Birdnet-PI, I’ve written a separate blog post detailing its setup, configuration, and the insights it provides. See: [Enhancing Birdwatching with AI & Technology](https://www.bentownsend.com/article/enhancing-birdwatching-ai-technology-13)
#### **Minecraft Bedrock Server**
Gaming also has a place in my home lab with a Minecraft Bedrock server:
* **Server Hosting:** I run a Minecraft Bedrock server that allows friends and family to connect and play together. This setup provides a dedicated space for creative and survival gameplay, enhancing the gaming experience with low-latency and high availability.
* **Customizations:** The server is configured with various plugins and mods to enrich the gameplay, offering unique challenges and features that aren't available in the standard game.
#### **Open-WebUI Ollama**
Open-WebUI Ollama is an innovative project for experimenting with large language models (LLMs) and AI:
* **Local and Private LLMs:** This project allows me to run LLMs like Llama 3 from Meta locally, ensuring full privacy. It provides a platform for experimenting with various LLMs without relying on external services.
* **Connecting to OpenAI:** Besides local models, Open-WebUI Ollama can connect to OpenAI's GPT models through their API, offering a versatile setup for different use cases.
* **Current Setup:** At the moment, the models are processed on the CPU, limiting their size and speed. Despite these limitations, this setup is excellent for experimentation and learning about LLMs and AI.
#### **CNY911.com Projects**
To support my business projects, I run several custom Docker containers on the Nginx server:
* **Data Processing Container:** This container handles the data processing tasks for the CNY911.com website, ensuring that data is efficiently managed and processed.
* **API Container:** The CNY911.com API container provides the necessary backend services for the website, facilitating smooth and reliable interactions with the site’s front end.
* **NTFY for Push Notifications:** NTFY is used to handle push notifications to devices for CNY911 alerts, ensuring timely and reliable alert delivery.
#### **Mosquitto for MQTT Communication**
Mosquitto is employed for MQTT-based communication between various applications:
* **Integration with Frigate and Home Assistant:** Mosquitto facilitates efficient and real-time data exchange between Frigate and Home Assistant. This setup enhances the functionality of these applications by enabling seamless communication and coordination.
These unique projects demonstrate the diverse applications and innovative solutions that can be developed within a home lab environment. Each project leverages the robust infrastructure and flexible software ecosystem of my home lab, showcasing the potential for creativity and technical advancement.
### **9. Challenges and Future Plans**
#### **Challenges**
Running a home lab comes with its own set of challenges. Here are some of the key issues I’ve faced:
* **Hardware Limitations:** Using older Dell and HP desktop PCs with Intel i5 processors and limited memory (12-16 GB) means that I occasionally encounter performance bottlenecks. Managing resources efficiently is crucial to ensure that all services run smoothly.
* **Network Configuration:** Managing a complex network with multiple VLANs, managed switches, and ensuring seamless connectivity between personal, consulting, and day job devices can be challenging. Ensuring network security while maintaining performance requires careful planning and ongoing adjustments.
* **Security:** Keeping all services secure is a constant battle. Regular updates, monitoring with tools like Wazuh, and managing access controls are necessary to prevent potential vulnerabilities and attacks.
* **Storage Management:** With a RAIDZ1 configuration on TrueNAS, balancing storage needs while ensuring redundancy can be tricky. Managing backups and ensuring data integrity is an ongoing task.
* **Experimentation and Stability:** Experimenting with new technologies and services can sometimes disrupt the stability of the home lab. Balancing the desire to learn and experiment with the need for a stable environment is an ongoing challenge.
#### **Future Plans**
Despite these challenges, there are several exciting plans for the future of my home lab:
* **Hardware Upgrades:** Upgrading to more powerful hardware is on the horizon. This will help alleviate some of the current performance bottlenecks and allow me to run more resource-intensive applications and services.
* **Open-Source Firewall:** I am considering replacing the Meraki Go Firewall with an open-source solution like pfSense. This change will provide greater configurability and control over my network settings, enhancing both security and performance.
* **Docker Swarms and Kubernetes:** Exploring Docker Swarms or Kubernetes for container orchestration is a potential future project. These tools would allow for more efficient management of containers, scaling applications, and improving resource utilization.
* **Enhanced Automation:** Expanding the use of automation tools like N8n and Home Assistant to cover more aspects of my home and business operations. This includes more sophisticated automations for energy management, security, and workflow optimizations.
* **AI and Machine Learning:** Further experimenting with AI and machine learning projects, particularly with the Open-WebUI Ollama and other LLMs. As hardware capabilities improve, exploring more advanced models and applications will be a key area of interest.
* **Frigate Integration:** Utilizing Frigate better within Home Assistant to trigger automations based on object detection and license plate detection, such as opening the garage door when my license plate is spotted in the driveway.
* **Local AI Processing:** Using enterprise server hardware already on hand to add better local AI processing by installing a GPU and utilizing the large amount of memory available in these machines.
* **Radio Hobby Integration:** Increasing integration with my radio hobby to support live streaming radio scanner monitoring and integration with data processing being done for the CNY911.com project.
* **Expanded NAS Storage:** Building a new NAS with significantly expanded storage while continuing to use TrueNAS Scale. This would allow me to mirror the two NAS servers for redundancy of critical data, build my media libraries further, and move some of my cloud storage locally to reduce dependence on third-party hosting like AWS S3, Microsoft OneDrive, and SharePoint.
* **Improved Backup Solutions:** Exploring better Proxmox and Docker backup solutions for more reliable off-site backups and faster recovery in the event of a drive failure or security incident.
These plans reflect a commitment to continuous improvement, learning, and innovation. By addressing current challenges and pursuing new opportunities, my home lab will continue to evolve, offering even more robust and exciting capabilities.
[![Home Lab representation graphic](/sites/default/files/styles/max_325x325/public/2024-05/homeLabbing.png?itok=bfFPX0n8)](/article/home-labbing-14)
Tags
[home lab](/taxonomy/term/51)
[Proxmox](/taxonomy/term/52)
[Docker](/taxonomy/term/53)
[Home Assistant](/taxonomy/term/54)
[TrueNAS](/taxonomy/term/55)
[Nginx](/taxonomy/term/56)
[Plex](/taxonomy/term/57)
[automation](/taxonomy/term/58)
[Frigate](/taxonomy/term/59)
[Reolink cameras](/taxonomy/term/60)
[VLAN](/taxonomy/term/61)
[Meraki Go](/taxonomy/term/62)
[pfSense](/taxonomy/term/63)
[AI and ML](/taxonomy/term/64)
[BirdNET-Pi](/taxonomy/term/47)
[Minecraft Bedrock server](/taxonomy/term/65)
[Open-WebUI Ollama](/taxonomy/term/66)
[CNY911.com](/taxonomy/term/67)
[NTFY](/taxonomy/term/68)
[Mosquitto](/taxonomy/term/69)
[NextCloud](/taxonomy/term/70)
[Wazuh](/taxonomy/term/71)
[Technitium DNS](/taxonomy/term/72)
[Uptime Kuma](/taxonomy/term/73)
[server hardware](/taxonomy/term/74)
[GPU processing](/taxonomy/term/75)
[LXC containers](/taxonomy/term/76)
[backup solutions](/taxonomy/term/77)
[NAS storage](/taxonomy/term/78)
[network security](/taxonomy/term/79)
[IoT devices](/taxonomy/term/80)
[automation tools](/taxonomy/term/81)
[enterprise server](/taxonomy/term/82)
[custom projects](/taxonomy/term/83)
[data processing](/taxonomy/term/84)
[remote access](/taxonomy/term/85)
[security monitoring](/taxonomy/term/86)
[storage management](/taxonomy/term/87)
[local AI processing](/taxonomy/term/88)
[cloud storage reduction](/taxonomy/term/89)
[media streaming](/taxonomy/term/90)
* [Log in](/user/login?destination=/article/home-labbing-14%23comment-form) to post comments