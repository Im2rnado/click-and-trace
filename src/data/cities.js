const baseUrl = import.meta.env.BASE_URL;

export const cities = [
    {
        id: 'heliopolis',
        nameEn: 'Heliopolis',
        descriptionShort: 'The Ancient City of the Sun',
        descriptionLong: 'Once the ultimate hotspot of ancient Egypt, Heliopolis — the legendary “City of the Sun” — was where the worship of Ra shaped an entire civilization. Hidden today beneath the busy streets of Ain Shams and Al-Matareya, this ancient city was more than a religious center; it was a hub for science, philosophy, and some of Egypt’s earliest breakthroughs, including the solar calendar. Even now, the towering Obelisk of Senusret I and newly discovered statues of Ramses II keep revealing stories from a city that once lit up the ancient world.',
        image: `${baseUrl}Heliopolis/UGLIANO_Fig.3.jpg`,
        lat: 30.1296,
        lng: 31.3275,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        externalLinks: [],
        topics: [
            {
                id: 'heliopolis-obelisk',
                title: 'Heliopolis Obelisk: The Last Standing Monument of an Ancient City (Infographic)',
                description: 'Rising in the heart of ancient Heliopolis, the obelisk of Senusret I remains the oldest surviving obelisk still standing in its original location in Egypt. Once part of one of ancient Egypt’s most important religious centers, the monument reflects the architectural skill and spiritual significance of the City of the Sun. This infographic highlights the history, importance, and enduring legacy of the Heliopolis Obelisk.',
                image: `${baseUrl}Heliopolis/hnfographImage Apr 23, 2026, 05_31_19 PM.png`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Rising in the heart of ancient Heliopolis, the obelisk of Senusret I remains the oldest surviving obelisk still standing in its original location in Egypt. Once part of one of ancient Egypt’s most important religious centers, the monument reflects the architectural skill and spiritual significance of the City of the Sun. This infographic highlights the history, importance, and enduring legacy of the Heliopolis Obelisk.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Heliopolis/hnfographImage Apr 23, 2026, 05_31_19 PM.png`,
                        alt: 'Heliopolis Obelisk Infographic',
                        isInfographic: true
                    }
                ]
            },
            {
                id: 'heliopolis-hidden-city',
                title: 'Heliopolis: The Ancient City Hidden Beneath Cairo',
                description: 'Every day, thousands of people walk through the streets of El-Matariya without realizing that beneath the crowded roads lies one of ancient Egypt’s most important religious cities...',
                image: `${baseUrl}Heliopolis/hel_2_1.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Every day, thousands of people walk through the streets of El-Matariya without realizing that beneath the crowded roads and buildings lies one of ancient Egypt’s most important religious cities. This area was once home to Heliopolis, known in ancient times as the “City of the Sun,” a major center for the worship of the sun god Ra.\n\nAlthough much of the ancient city disappeared over time, archaeological discoveries continue to reveal traces of a civilization that once played a central role in shaping Egypt’s religious and cultural identity.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Heliopolis/hel_2_1.jpg`,
                        alt: 'Ancient ruins under modern structures'
                    },
                    {
                        type: 'heading',
                        content: 'The City of the Sun'
                    },
                    {
                        type: 'paragraph',
                        content: 'Heliopolis was one of the most influential cities in ancient Egypt. Beyond its religious importance, it was also a center of learning where priests and scholars studied astronomy, philosophy, and theology.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Heliopolis/hel_2_2.jpg`,
                        alt: 'Excavations of the sun temple'
                    },
                    {
                        type: 'paragraph',
                        content: 'The city’s Greek name, Heliopolis, means “City of the Sun,” reflecting its close connection to the worship of Ra, whom ancient Egyptians believed was the creator of life and the universe. Temples dedicated to the sun god once filled the area, making Heliopolis one of the holiest cities in ancient Egypt.\n\nPriests in Heliopolis were not only responsible for religious rituals but were also known for their knowledge of the stars and the movement of the sun. Their ideas influenced Egyptian religious beliefs for centuries.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Heliopolis/hel_2_3.jpg`,
                        alt: 'Traces of the sacred precincts'
                    },
                    {
                        type: 'heading',
                        content: 'A Lost City Beneath Modern Cairo'
                    },
                    {
                        type: 'paragraph',
                        content: 'Over time, many of Heliopolis’ temples and monuments disappeared. Some structures were destroyed, while others were dismantled and reused in later buildings. As Cairo expanded, modern neighborhoods gradually covered the remains of the ancient city.\n\nDespite this, archaeological excavations in El-Matariya continue to uncover statues, temple remains, and ancient inscriptions that reveal the scale and significance of Heliopolis.'
                    },
                    {
                        type: 'paragraph',
                        content: 'Tour guide Samir Massaad, who has spent years guiding visitors through Matariya’s historical areas, says many residents are unaware of the history beneath their feet.\n\n“Many people walk through this area every day without realizing that they are standing on one of the most important religious cities of the ancient world,” Massaad explains.\n\nAccording to him, Heliopolis was once filled with temples, statues, and sacred spaces, most of which now remain buried underground.\n\n“Today, most of the city is hidden beneath modern Cairo,” he says. “But its historical value is still extremely important.”'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Heliopolis/hel_2_4.jpg`,
                        alt: 'Modern life surrounding historical monument sites'
                    },
                    {
                        type: 'heading',
                        content: 'The Legacy Beneath the Streets'
                    },
                    {
                        type: 'paragraph',
                        content: 'While little of Heliopolis remains visible above ground today, its legacy continues through ongoing archaeological discoveries and historical research. Beneath the streets of modern Cairo lies the story of a city that helped shape the religious thought and cultural identity of ancient Egypt for centuries.\n\nTo many people, El-Matariya may appear to be just another district in Cairo. But hidden beneath its streets is the legacy of the ancient City of the Sun.'
                    }
                ]
            },
            {
                id: 'heliopolis-through-time',
                title: 'From the City of the Sun to Modern Cairo: Heliopolis Through Time (Infographic)',
                description: 'Once one of ancient Egypt’s most important religious centers, Heliopolis was known as the “City of the Sun” and served as a major center for the worship of Ra. Today, most of the ancient city lies hidden beneath the crowded streets of El-Matariya in Cairo. This infographic compares Heliopolis in the past and present, highlighting how a city once filled with temples and monuments gradually transformed into a modern urban district while preserving traces of its ancient legacy underground.',
                image: `${baseUrl}Heliopolis/UGLIANO_Fig.3.jpg`, // You can swap this image for the infographic file once uploaded
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Once one of ancient Egypt’s most important religious centers, Heliopolis was known as the “City of the Sun” and served as a major center for the worship of Ra. Today, most of the ancient city lies hidden beneath the crowded streets of El-Matariya in Cairo. This infographic compares Heliopolis in the past and present, highlighting how a city once filled with temples and monuments gradually transformed into a modern urban district while preserving traces of its ancient legacy underground.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Heliopolis/UGLIANO_Fig.3.jpg`, // Standard infographic layout with beautiful dark card styling
                        alt: 'Heliopolis Through Time Infographic',
                        isInfographic: true
                    }
                ]
            }
        ]
    },
    {
        id: 'memphis',
        nameEn: 'Memphis',
        descriptionShort: 'The First Capital of Unified Egypt',
        descriptionLong: 'Before Cairo, before Alexandria — there was Memphis, Egypt’s first great capital. Founded over 5,000 years ago by King Narmer after unifying Egypt, this legendary city became the center of power, creativity, and daily life in the ancient world. Located near Saqqara, Memphis was famous for honoring Ptah, the god of craftsmen, making it a thriving hub for art and innovation. Today, massive statues like the colossal Ramesses II and the mysterious Alabaster Sphinx still stand as reminders of a city that helped shape one of history’s greatest civilizations.',
        image: `${baseUrl}Memphis/Copy of IMG_٢٠٢٦٠٤٢٥_١٨٠٠٢١.jpg`,
        lat: 29.8496,
        lng: 31.2541,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        externalLinks: [],
        topics: [
            {
                id: 'memphis-saving-capital',
                title: 'Saving the First Capital: Will Water and Concrete Swallow the History of Memphis?',
                description: 'In the heart of Mit Rahina, history faces an existential struggle. Data reveals that 70% of the site’s monuments are missing or threatened by chemical erosion, placing us in a race against time to save this world heritage.',
                image: `${baseUrl}Memphis/mem_1_1.png`,
                sections: [
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_1_1.png`,
                        alt: 'Mit Rahina (Memphis) facing groundwater and urban expansion threats'
                    },
                    {
                        type: 'paragraph',
                        content: 'In the heart of Mit Rahina, history faces an existential struggle. Data reveals that 70% of the site’s monuments are missing or threatened by chemical erosion, placing us in a race against time to save this world heritage.'
                    },
                    {
                        type: 'heading',
                        content: 'A Silent Enemy Beneath the Surface'
                    },
                    {
                        type: 'paragraph',
                        content: 'Mahmoud Ali, (title related to topic), explains that Mit Rahina is not merely a surface site, but a massive ancient city extending deep underground. He warns that groundwater is the "most dangerous enemy" because it infiltrates the pores of the limestone, causing it to crumble structurally from within. He describes the situation as a "race against time," where restoration only slows down the decay without radical engineering intervention.'
                    },
                    {
                        type: 'heading',
                        content: 'Historical Evidence: "The Dissolving Legs of Ramses"'
                    },
                    {
                        type: 'paragraph',
                        content: 'In a similar context, Ali Maghni, (title related to topic), points to a shocking fact: the colossal statue of Ramses II was discovered in a pool of mud, with large parts of its legs missing because they literally "dissolved" in groundwater. He emphasizes that the greatest risk is to the "entire buried city" lying below ground level, especially with the added pressure of sewage leakage.'
                    },
                    {
                        type: 'heading',
                        content: 'Government Action: Can We Catch Up?'
                    },
                    {
                        type: 'paragraph',
                        content: 'Khaled Mohammed, (title related to topic), sees a glimmer of hope in state measures, such as strict building bans and declaring the area an "Archaeological Protectorate," similar to the Luxor model. Combining hydraulic engineering solutions with political will is the only way to ensure that the identity of "Memphis" does not dissolve into oblivion.'
                    }
                ]
            },
            {
                id: 'memphis-ramesses-descendants',
                title: "Ramesses' Descendants in Mit Rahina: Modern Tools Chasing an Ancient Miracle",
                description: 'In the alleys of Mit Rahina, where the colossal statue of Ramesses II stands as a testament to the mastery of Ancient Egyptian sculpture, the dust of stone still coats the faces of his descendants. However, behind this dust lies a technical tale far different from what tourists imagine...',
                image: `${baseUrl}Memphis/mem_2_1.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'In the alleys of Mit Rahina, where the colossal statue of Ramesses II stands as a testament to the mastery of Ancient Egyptian sculpture, the dust of stone still coats the faces of his descendants. However, behind this dust lies a technical tale far different from what tourists imagine; a story where "primitive chisels" meet "electric grinders" in a desperate attempt to bridge the gap with ancestors who performed the impossible.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_2_1.jpg`,
                        alt: 'Descendants of Ramesses carving stone in modern Mit Rahina'
                    },
                    {
                        type: 'heading',
                        content: 'Facing the Reality: Are We Today’s Pharaohs?'
                    },
                    {
                        type: 'paragraph',
                        content: 'Tour guide Arsany Medhat believes the romanticized image of using ancient techniques is a "myth." He states clearly: "Honestly, no one today uses the exact tools or techniques of the Pharaohs". Medhat explains that carving granite in ancient times with such simple tools was "mind-blowing" and nearly impossible to replicate today. He emphasizes that modern equipment and electricity are now the backbone of the workshops, though the "spirit of creativity" remains the only surviving link to the past.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_2_2.jpg`,
                        alt: 'Mastering basalt and granite under modern machinery'
                    },
                    {
                        type: 'heading',
                        content: 'Haj Nasser: Machine Secrets and the Hand’s Touch'
                    },
                    {
                        type: 'paragraph',
                        content: 'From inside his workshop, Nasser Abdel-Moaty, a master sculptor from Mit Rahina, explains the trade\'s technical secrets. Abdel-Moaty distinguishes between stone types: while limestone remains submissive to "primitive manual work," hard rocks like basalt and granite only surrender to "grinders and drills."'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_2_3.jpg`,
                        alt: 'Manual detailing requires an artist\'s touch'
                    },
                    {
                        type: 'paragraph',
                        content: 'Regarding the stages where machines fail, Abdel-Moaty points to "clay modeling" and "limestone carving" as materials that require the artist\'s human touch. Despite the dominance of machines, he highlights a crucial irony: "Tourists always look for masterful handwork; they prefer it over machine-made pieces."'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_2_4.jpg`,
                        alt: 'Haj Nasser\'s final hand-polished sculptures'
                    },
                    {
                        type: 'heading',
                        content: 'The "Impossible Competition"'
                    },
                    {
                        type: 'paragraph',
                        content: 'Despite technological advancement, humility remains the dominant sentiment in Mit Rahina. Haj Nasser concludes with deep respect for history: "The Pharaonic civilization is impossible for anyone to compete with whether our generation, those before us, or those to come. We are simply trying to close the gap as much as possible between us and the Ancient Egyptians."'
                    }
                ]
            },
            {
                id: 'memphis-life-ruins',
                title: 'Life Among Ruins: Everyday Stories Beside Egypt’s First Capital',
                description: 'In Mit Rahina, the site of ancient Memphis, the first capital of Egypt, history is not confined to museum halls or dusty textbooks. Here, families live in the shadow of colossal statues and weathered temples, their daily routines unfolding against a backdrop of millennia-old monuments...',
                image: `${baseUrl}Memphis/Copy of IMG_٢٠٢٦٠٤٢٥_١٨٠٠٢١.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'In Mit Rahina, the site of ancient Memphis, the first capital of Egypt, history is not confined to museum halls or dusty textbooks. Here, families live in the shadow of colossal statues and weathered temples, their daily routines unfolding against a backdrop of millennia-old monuments. Children play near crumbling stone blocks, vendors set up stalls beside sacred ruins, and homes rise just steps away from the remnants of pharaonic grandeur. This coexistence of modern life and ancient legacy offers a rare glimpse into how heritage and humanity intertwine in one of the world’s most storied landscapes.'
                    },
                    {
                        type: 'video_placeholder',
                        placeholderText: 'waiting for you'
                    }
                ]
            },
            {
                id: 'memphis-guardian-capital',
                title: 'The Guardian of the First Egyptian Capital',
                description: 'Here is Mit Rahina the heart of ancient Memphis, the first capital of unified Egypt, a place that still pulsates with the greatness of our ancestors...',
                image: `${baseUrl}Memphis/mem_4_1.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Here is Mit Rahina the heart of ancient Memphis, the first capital of unified Egypt, a place that still pulsates with the greatness of our ancestors.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_4_1.jpg`,
                        alt: 'Mit Rahina: Entrance to ancient Memphis'
                    },
                    {
                        type: 'paragraph',
                        content: 'When you stand before Ramses II, you will feel how insignificant we are in our modern world. The king\'s statue, which weighs tons and is meters tall, embodies power in its most magnificent form.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_4_2.jpg`,
                        alt: 'Standing before the colossal stature of King Ramesses II'
                    },
                    {
                        type: 'paragraph',
                        content: 'Thousands of years have passed, the world has changed, yet it has remained steadfast in its place, telling the story of a civilization that knew no impossible.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_4_3.jpg`,
                        alt: 'A steadfast monument standing through changing eras'
                    },
                    {
                        type: 'paragraph',
                        content: 'Ramesses II, the Great Ancestor and the most powerful pharaoh of the New Kingdom. He was not merely a warrior, but a king who sought to immortalize his legacy in stone and he triumphantly succeeded.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_4_4.jpg`,
                        alt: 'King Ramesses II: The great ancestor of the New Kingdom'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_4_5.jpg`,
                        alt: 'Carvings depicting the pharaoh\'s legacy'
                    },
                    {
                        type: 'paragraph',
                        content: 'Mit Rahina is not just an open-air museum, but a journey through time that begins at the feet of this great king.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_4_6.png`,
                        alt: 'Journeying through the Mit Rahina Open Air Museum'
                    }
                ]
            },
            {
                id: 'memphis-visiting-today',
                title: 'Visiting Memphis Today',
                description: 'Mit Rahina is located in the Al-Badrasheen district of Giza, and reaching it is both easy and scenic. Here is your ultimate guide containing transport details, top attractions, best visiting times, and ticket prices.',
                image: `${baseUrl}Memphis/mem_5_1.jpg`,
                sections: [
                    {
                        type: 'heading',
                        content: '1. How to Get There?'
                    },
                    {
                        type: 'paragraph',
                        content: 'Mit Rahina is located in the Al-Badrasheen district of Giza, and reaching it is both easy and scenic:\n\nBy Car: The best routes are the "Marrioutiya Tourist Road" or the "Saqqara Road," leading directly to Mit Rahina village.\n\nBy Public Transport: Take a microbus from the "Mounib Station" heading to Al-Badrasheen. From there, a quick "Tuk-tuk" ride will drop you at the entrance of the Open-Air Museum in just a few minutes.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_5_1.jpg`,
                        alt: 'Scenic route leading to Mit Rahina village'
                    },
                    {
                        type: 'heading',
                        content: '2. Must-See Attractions'
                    },
                    {
                        type: 'paragraph',
                        content: 'Tour Guide Alaa Mohamed emphasizes that "Memphis" is not just about statues; it is the story of Egypt’s first capital. Here are the top three highlights you shouldn\'t miss:'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_5_2.jpg`,
                        alt: 'Overview of the Memphis Open-Air Museum'
                    },
                    {
                        type: 'paragraph',
                        content: 'The Colossal Statue of Ramesses II: Weighing 80 tons, this is the "masterpiece" of the site. You will be amazed by the intricate details of the facial features and muscular anatomy.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_5_3.jpg`,
                        alt: 'The Colossal Statue of Ramesses II'
                    },
                    {
                        type: 'paragraph',
                        content: 'The Alabaster Sphinx: The second-largest sphinx in Egypt, carved from rare alabaster stone which gives it a unique natural glow under the sun.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_5_4.jpg`,
                        alt: 'The glowing Alabaster Sphinx'
                    },
                    {
                        type: 'paragraph',
                        content: 'The Open-Air Museum: A vast area containing rare statues and column bases that narrate the history of the Old Kingdom.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_5_5.jpg`,
                        alt: 'Exquisite column bases and pharaonic artifacts'
                    },
                    {
                        type: 'heading',
                        content: '3. Best Time to Visit'
                    },
                    {
                        type: 'paragraph',
                        content: 'According to Mr. Alaa\'s expert advice, timing is key for the best experience:\n\nThe Recommendation: Visit early in the morning, between 9:00 AM and 10:00 AM.\n\nAt this time, the sunlight enters the "House of Ramesses" at a specific angle that brilliantly highlights the King\'s facial details and physique, making it the perfect time for photography. Additionally, the atmosphere is calm and peaceful before the afternoon crowds arrive.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Memphis/mem_5_6.jpg`,
                        alt: 'Morning sunlight bathing the colossal statue'
                    },
                    {
                        type: 'heading',
                        content: '4. Ticket Prices'
                    },
                    {
                        type: 'paragraph',
                        content: 'The site offers very affordable entry fees:\n\nEgyptians: 10 EGP (and only 5 EGP for Egyptian students).\n\nForeigners: 200 EGP (and 100 EGP for foreign students).'
                    },
                    {
                        type: 'image',
                        content: '',
                        src: `${baseUrl}Memphis/mem_5_7.jpg`,
                        alt: 'Entrance gates to the Open-Air Museum'
                    }
                ]
            },
            {
                id: 'memphis-museum-journey',
                title: 'Mit Rahina Museum: A Photo Journey Through Egypt’s Ancient Capital',
                description: 'Located in the ancient city of Memphis, Mit Rahina Museum preserves some of the most remarkable remains of one of Egypt’s earliest capitals. Through statues, stone fragments, and open-air monuments, the museum offers visitors a closer look...',
                image: `${baseUrl}Memphis/mem_4_1.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Located in the ancient city of Memphis, Mit Rahina Museum preserves some of the most remarkable remains of one of Egypt’s earliest capitals. Through statues, stone fragments, and open-air monuments, the museum offers visitors a closer look at the artistic and political legacy of ancient Memphis. This photo story captures the atmosphere of the site, highlighting its monumental sculptures, archaeological remains, and the historical significance that continues to shape the museum today.'
                    },
                    {
                        type: 'slideshow',
                        images: [
                            {
                                src: `${baseUrl}Memphis/mem_6_1 (1).jpg`,
                                alt: 'Colossal statues and architectural fragments in the Mit Rahina Museum'
                            },
                            {
                                src: `${baseUrl}Memphis/mem_6_1 (2).jpg`,
                                alt: 'Detailed close-up of pharaonic sculpture craftsmanship'
                            },
                            {
                                src: `${baseUrl}Memphis/mem_6_1 (3).jpg`,
                                alt: 'Limestone relics depicting ancient inscriptions'
                            },
                            {
                                src: `${baseUrl}Memphis/mem_6_1 (4).jpg`,
                                alt: 'Scenic garden walkway displaying preserved column bases'
                            },
                            {
                                src: `${baseUrl}Memphis/mem_6_1 (5).jpg`,
                                alt: 'Close-up of the muscular detail in royal granite statues'
                            },
                            {
                                src: `${baseUrl}Memphis/mem_6_1 (6).jpg`,
                                alt: 'Historical treasures under museum protective glass'
                            },
                            {
                                src: `${baseUrl}Memphis/mem_6_1 (7).jpg`,
                                alt: 'Monolithic blocks from early kingdom unified capital structures'
                            },
                            {
                                src: `${baseUrl}Memphis/mem_6_1 (8).jpg`,
                                alt: 'Preserved reliefs representing religious deities of Memphis'
                            },
                            {
                                src: `${baseUrl}Memphis/mem_6_1 (9).jpg`,
                                alt: 'Outdoor museum courtyard exhibiting monumental elements'
                            },
                            {
                                src: `${baseUrl}Memphis/mem_6_1 (10).jpg`,
                                alt: 'Beautiful alabaster components showing unique textures'
                            },
                            {
                                src: `${baseUrl}Memphis/mem_6_1 (11).jpg`,
                                alt: 'Intricate crown and headdress styling of royal statues'
                            },
                            {
                                src: `${baseUrl}Memphis/mem_6_1 (12).jpg`,
                                alt: 'Wide angle overview of Mit Rahina Open-Air gallery'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'tanis',
        nameEn: 'Tanis',
        descriptionShort: 'Ruins, Royalty and Untold Stories',
        descriptionLong: 'Hidden in Egypt’s Sharqia Governorate, Tanis was once a royal city packed with power, wealth, and legendary treasures. Known as the “Thebes of Lower Egypt,” it became the capital during the 21st and 22nd Dynasties and a major center for the worship of Amun. Its biggest claim to fame? The discovery of King Psusennes I’s golden tomb — a treasure so incredible it’s often compared to Tutankhamun’s. Today, Tanis feels like a forgotten movie set, filled with giant statues, fallen obelisks, and ancient ruins waiting to tell their stories.',
        image: `${baseUrl}Tanis/tan11-1536x1024.jpg`,
        lat: 30.9761,
        lng: 31.8789,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        externalLinks: [],
        topics: [
            {
                id: 'tanis-museum-journey',
                title: 'Inside the Tanis Museum: A Visual Journey Through a Lost Royal City',
                description: 'This photo story explores the rich history of Tanis through a collection of archival excavation photographs, historic images of San El-Hagar, and portraits of ancient Egyptian kings connected to the site.',
                image: `${baseUrl}Tanis/ten_1_1 (1).jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'This photo story explores the rich history of Tanis through a collection of archival excavation photographs, historic images of San El-Hagar, and portraits of ancient Egyptian kings connected to the site. At the center of this visual journey stands the Tanis Museum, which preserves and presents the archaeological legacy of one of Egypt’s most important ancient capitals. Together, these images reveal how Tanis evolved from a powerful royal city into a modern archaeological landscape shaped by discovery, memory, and preservation.'
                    },
                    {
                        type: 'slideshow',
                        images: [
                            {
                                src: `${baseUrl}Tanis/ten_1_1 (1).jpg`,
                                alt: 'Archival excavation photographs displaying the monumental ruins of Tanis'
                            },
                            {
                                src: `${baseUrl}Tanis/ten_1_1 (2).jpg`,
                                alt: 'Historic images of San El-Hagar showing the early landscape of the site'
                            },
                            {
                                src: `${baseUrl}Tanis/ten_1_1 (3).jpg`,
                                alt: 'Portraits and depictions of ancient Egyptian kings connected to Tanis'
                            },
                            {
                                src: `${baseUrl}Tanis/ten_1_1 (4).jpg`,
                                alt: 'Exquisite royal jewelry and funerary treasures unearthed during excavations'
                            },
                            {
                                src: `${baseUrl}Tanis/ten_1_1 (5).jpg`,
                                alt: 'Granite sarcophagus and protective tomb chambers of Tanite pharaohs'
                            },
                            {
                                src: `${baseUrl}Tanis/ten_1_1 (6).jpg`,
                                alt: 'Inscribed obelisks and monumental blocks mapping the royal temple of Amun'
                            },
                            {
                                src: `${baseUrl}Tanis/ten_1_1 (7).jpg`,
                                alt: 'Statues and royal carvings representing the visual identity of the 21st Dynasty'
                            },
                            {
                                src: `${baseUrl}Tanis/ten_1_1 (8).jpg`,
                                alt: 'Archival sketches and field documentation from French archaeologist Pierre Montet'
                            },
                            {
                                src: `${baseUrl}Tanis/ten_1_1 (9).jpg`,
                                alt: 'The entrance pavilion of the modern Tanis Open-Air Museum'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'tanis-five-facts',
                title: 'Tanis Uncovered: Five Facts About One of Ancient Egypt’s Greatest Cities (Infographic)',
                description: 'Once a powerful royal capital in Egypt’s northeastern Delta, Tanis—known today as San El-Hagar—was home to temples, royal tombs, and monumental statues that reflected the city’s political and religious importance.',
                image: `${baseUrl}Tanis/ten_2_1.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Once a powerful royal capital in Egypt’s northeastern Delta, Tanis—known today as San El-Hagar—was home to temples, royal tombs, and monumental statues that reflected the city’s political and religious importance. Although less famous than other ancient Egyptian sites, Tanis remains one of the country’s most remarkable archaeological treasures. These five facts highlight what makes the ancient city unique and historically significant.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Tanis/ten_2_1.jpg`,
                        alt: 'Tanis Uncovered: Five Facts Infographic',
                        isInfographic: true
                    }
                ]
            },
            {
                id: 'tanis-forgotten-city',
                title: 'Tanis: The Forgotten Royal City Beneath Sharqia’s Fields',
                description: 'Hidden among the fields of Sharqia Governorate, the ancient city of Tanis—known today as San El-Hagar—once stood as one of Egypt’s most important royal capitals.',
                image: `${baseUrl}Tanis/ten_3_1.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Hidden among the fields of Sharqia Governorate, the ancient city of Tanis—known today as San El-Hagar—once stood as one of Egypt’s most important royal capitals. Filled with monumental temples, royal tombs, and massive statues, the site carried both political and religious significance for centuries. Yet despite its historical value, Tanis remains largely absent from Egypt’s modern tourism spotlight.\n\nIn an interview, Ezzat Aref, Senior Inspector of Antiquities at Tanis, reflects on the challenges facing the site today, the misconceptions surrounding its history, and the reasons why one of ancient Egypt’s greatest cities remains overlooked by many visitors.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Tanis/ten_3_1.jpg`,
                        alt: 'The scenic and quiet archaeological plains of Tanis'
                    },
                    {
                        type: 'heading',
                        content: 'A Forgotten Name on Egypt’s Tourism Map'
                    },
                    {
                        type: 'paragraph',
                        content: 'According to Aref, one of the main issues begins with the site’s identity itself. Many Egyptians and tourists, he explains, recognize the area as San El-Hagar rather than Tanis, limiting wider awareness of its archaeological importance.\n\n“Many people don’t actually know Tanis by this name,” he says. “They are more familiar with it as San El-Hagar, which affects how well the site is recognized.”\n\nHe believes the site needs stronger inclusion on Egypt’s tourism map, along with improved services and infrastructure capable of supporting visitors. Roads, facilities, and tourism development, he notes, remain essential if Tanis is to receive the attention it deserves.\n\n“The site needs to be properly included on Egypt’s tourism map so more visitors can discover its importance,” Aref explains. “Tanis also needs better services and infrastructure to support tourism.”'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Tanis/ten_3_2.jpg`,
                        alt: 'San El-Hagar village surrounding the archaeological mound'
                    },
                    {
                        type: 'heading',
                        content: 'Calls for Development and a Local Museum'
                    },
                    {
                        type: 'paragraph',
                        content: 'Aref also stresses the importance of establishing a local museum to preserve and display the discoveries uncovered in the area. With the archaeological site extending across nearly 550 feddans, he argues that the space could accommodate more than one museum in the future.\n\n“We need a museum here to preserve and display the important artifacts found in this area,” he says, adding that the site’s scale gives it enormous cultural and tourism potential.\n\nFor Aref, greater institutional support is equally important. He believes the Ministry of Tourism and Antiquities should play a stronger role in promoting and developing the site as part of Egypt’s broader heritage landscape.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Tanis/ten_3_3.jpg`,
                        alt: 'Monumental statues and columns stored in the open-air layout'
                    },
                    {
                        type: 'heading',
                        content: 'Did Tanis Really Disappear?'
                    },
                    {
                        type: 'paragraph',
                        content: 'Beyond the issue of tourism, Aref also challenges a common misconception surrounding Tanis—that the ancient city somehow disappeared completely over time.\n\n“It is not correct to say that the antiquities of Tanis disappeared,” he explains. “Most of the remains were buried underground.”\n\nHe points out that parts of the archaeological mound rise nearly 30 meters above the surrounding land, evidence of the layers of sand and debris that gradually concealed the ancient city beneath the surface.\n\nAccording to him, the decline of Tanis was closely linked to environmental change. The retreat and drying up of the Pelusiac branch of the Nile, which once flowed through the city, contributed to its gradual collapse. Over time, rulers of the 21st Dynasty reused many of its monuments in the construction of their new capital at San El-Hagar.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Tanis/ten_3_4.jpg`,
                        alt: 'Excavated royal tombs containing massive stone sarcophagi'
                    },
                    {
                        type: 'paragraph',
                        content: 'Despite centuries of burial and decline, Tanis returned to international attention during the excavations of French Egyptologist Pierre Montet in the 1930s. His discoveries—particularly the royal tombs uncovered in 1939—revealed remarkable treasures and transformed modern understanding of the site.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Tanis/ten_3_5.jpg`,
                        alt: 'Archival photographs representing French excavations of 1939'
                    },
                    {
                        type: 'heading',
                        content: 'Tanis and the Indiana Jones Connection'
                    },
                    {
                        type: 'paragraph',
                        content: 'Aref also notes that Tanis gained unexpected global recognition through popular culture, particularly through its connection to the Indiana Jones films.\n\n“People are aware that this film is inspired by Tanis in San El-Hagar,” he says, explaining that parts of the movie’s imagery drew inspiration from the archaeological landscape and discoveries associated with the ancient city.\n\nToday, Tanis remains a place suspended between past and present—a forgotten royal capital whose temples, tombs, and buried monuments continue to tell the story of one of Egypt’s most remarkable ancient cities.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Tanis/ten_3_6.jpg`,
                        alt: 'Steadfast column standing tall in the fields of Sharqia'
                    },
                    {
                        type: 'video_placeholder',
                        placeholderText: 'waiting for you'
                    }
                ]
            },
            {
                id: 'tanis-through-time',
                title: 'Tanis Through Time: From Royal Capital to Living Heritage Site (Infographic)',
                description: 'Once known as the “Thebes of the North,” Tanis was one of ancient Egypt’s most important royal capitals, home to temples, sacred lakes, royal tombs, and monumental statues.',
                image: `${baseUrl}Tanis/ten_4_1.png`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Once known as the “Thebes of the North,” Tanis was one of ancient Egypt’s most important royal capitals, home to temples, sacred lakes, royal tombs, and monumental statues. Today, the site—modern-day San El-Hagar in Sharqia Governorate—stands as an open-air museum where traces of this powerful past still shape the landscape. This infographic and visual footage explore the transformation of Tanis over time, highlighting how an ancient center of political and religious power evolved into a living archaeological site surrounded by everyday life.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Tanis/ten_4_1.png`,
                        alt: 'Tanis Through Time Infographic',
                        isInfographic: true
                    },
                    {
                        type: 'heading',
                        content: 'Video: A Glimpse of Tanis'
                    },
                    {
                        type: 'paragraph',
                        content: 'A short glimpse into the monuments and ruins of ancient Tanis.'
                    },
                    {
                        type: 'video_placeholder',
                        placeholderText: 'waiting for you'
                    }
                ]
            },
            {
                id: 'tanis-ai-visualization',
                title: 'Rediscovering Tanis: An AI Visualization of Egypt’s Lost Royal City',
                description: 'Using AI-generated visuals, this video brings the ancient city of Tanis back to life, tracing the history of one of Egypt’s most important yet often overlooked royal capitals.',
                image: `${baseUrl}Tanis/tan11-1536x1024.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Using AI-generated visuals, this video brings the ancient city of Tanis back to life, tracing the history of one of Egypt’s most important yet often overlooked royal capitals. Once a center of political and religious power in the northeastern Delta, Tanis was home to monumental temples, royal tombs, and massive statues. Through digitally recreated scenes and historical storytelling, the video offers a modern visual journey into the rise, decline, and rediscovery of the ancient city.'
                    },
                    {
                        type: 'video_placeholder',
                        placeholderText: 'waiting for you'
                    }
                ]
            }
        ]
    },
    {
        id: 'qantir',
        nameEn: 'Qantir (Pi-Ramesses)',
        descriptionShort: 'The Lost City where an Empire Began',
        descriptionLong: 'Once the dazzling capital of Ramesses II, Pi-Ramesses was the beating heart of Egypt’s empire during the New Kingdom. Hidden today beneath the village of Qantir in Sharqia, this ancient mega-city was packed with royal palaces, military power, and high-tech workshops producing bronze and glass centuries ahead of their time. Built near Egypt’s eastern border, it connected the kingdom to Asia through trade, diplomacy, and defense. Even in ruins, Pi-Ramesses still tells the story of an empire at its absolute peak.',
        image: `${baseUrl}Qantir/WhatsApp Image 2026-05-14 at 3.29.34 PM.jpeg`,
        lat: 30.8067,
        lng: 31.8365,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        externalLinks: [],
        topics: [
            {
                id: 'qantir-living-above',
                title: 'Living Above an Ancient Capital in Qantir',
                description: 'In the quiet village of Qantir, daily life unfolds at an unhurried pace. Farmers cross green fields at sunrise, children make their way to school, and the rhythms of rural life continue as they have for generations.',
                image: `${baseUrl}Qantir/qan_1_1.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'In the quiet village of Qantir, daily life unfolds at an unhurried pace. Farmers cross green fields at sunrise, children make their way to school, and the rhythms of rural life continue as they have for generations.\n\nYet beneath this calm surface lies something extraordinary—the buried remains of Per-Ramesses, one of ancient Egypt’s greatest capitals. In Qantir, history is not distant or confined to museums; it exists just below the soil, shaping a unique relationship between past and present.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Qantir/qan_1_1.jpg`,
                        alt: 'Quiet village life above the ancient capital'
                    },
                    {
                        type: 'heading',
                        content: 'A Farmer Between Past and Present'
                    },
                    {
                        type: 'paragraph',
                        content: 'For Mahmoud Ali, a 58-year-old farmer, this connection is part of everyday life. Having spent his entire life working the same land as his family before him, he has witnessed firsthand how the past continues to surface—sometimes literally.\n\nStanding beside his fields, Mahmoud explains that fragments of pottery and ancient remains occasionally appear between rows of crops. When such discoveries are made, archaeologists are often called in to examine the site, turning ordinary farmland into a place of historical significance.\n\n“I have lived here all my life,” he says. “Sometimes we find pieces of old pottery while farming. When that happens, archaeologists come to check the land.”\n\nHe recalls earlier years when foreign archaeological teams conducted excavations nearby, drawing curious villagers who gathered to watch. While the presence of history brings a sense of pride, it also comes with challenges.\n\n“It feels special,” Mahmoud says. “But sometimes it is also difficult. We want to farm freely, but we also know this land is important.”\n\nThat balance between livelihood and preservation is not always easy. Mahmoud also raises concerns about illegal digging, noting that some attempts to search for artifacts at night can damage the site and erase valuable history.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Qantir/qan_1_2.png`,
                        alt: 'Farmer observing his fields'
                    },
                    {
                        type: 'heading',
                        content: 'Memories of the First Excavations'
                    },
                    {
                        type: 'paragraph',
                        content: 'For older residents like 72-year-old Farid Awad, the arrival of archaeologists marked a turning point in how the village saw itself.\n\nHe remembers the early excavations vividly, describing a time when curiosity and uncertainty went hand in hand. Villagers did not fully grasp the significance of what lay beneath their land, but they sensed it was something important.\n\n“I remember when foreign archaeologists came many years ago,” he says. “People were curious and excited. We didn’t fully understand the value at first, but we knew it was something big.”\n\nThe discoveries brought mixed reactions. While some feared that their land might be taken for excavation, others felt a growing sense of pride as Qantir gained recognition beyond Egypt.\n\n“There was concern,” Farid recalls, “but there was also pride.”'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Qantir/qan_1_3.png`,
                        alt: 'Older resident sharing memories of early excavations'
                    },
                    {
                        type: 'heading',
                        content: 'A New Generation, A New Vision'
                    },
                    {
                        type: 'paragraph',
                        content: 'Among younger residents, that sense of pride remains, but it is increasingly paired with a forward-looking perspective.\n\nMohammed Hashem, a 21-year-old university student, says that while many young people are aware they live above Per-Ramesses, not all fully understand its historical importance. Still, the connection to the past is something he values deeply.\n\n“We grew up hearing that this land was special,” he says. “I feel proud living here. Not many people can say they live above an ancient capital.”\n\nUnlike older generations, who were often concerned about land ownership, Mohammed sees potential in the site’s future. He believes that, if properly developed, it could bring economic opportunities to the village.\n\n“Tourism could help young people here,” he explains, adding that any development must come with strong efforts to protect the site.\n\nFor him, living in Qantir is a daily reminder of history’s presence. “It feels like history is part of our daily life,” he says.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Qantir/qan_1_4.png`,
                        alt: 'A younger generation with a forward-looking perspective'
                    },
                    {
                        type: 'heading',
                        content: 'Where the Past Lives in the Present'
                    },
                    {
                        type: 'paragraph',
                        content: 'In Qantir, the story of Per-Ramesses is not only about ancient kings and lost capitals—it is also about the people who live above its remains today. Farmers, students, and elders all share a landscape where history is woven into daily life.\n\nHere, the past is not distant. It is embedded in the soil, resurfacing in fragments, memories, and lived experience—turning an ordinary village into a place where every step carries the weight of history.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Qantir/qan_1_5.png`,
                        alt: 'Everyday life intertwined with history'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Qantir/qan_1_6.png`,
                        alt: 'Living above an ancient capital'
                    }
                ]
            },
            {
                id: 'qantir-then-and-now',
                title: 'Qantir Then and Now: Traces of an Ancient Capital in a Living Landscape',
                description: 'Once the heart of the grand city of Per-Ramesses, Qantir today stands as a quiet rural village where layers of ancient history lie beneath everyday life.',
                image: `${baseUrl}Qantir/qan_2_1.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Once the heart of the grand city of Per-Ramesses, Qantir today stands as a quiet rural village where layers of ancient history lie beneath everyday life. Agricultural fields, scattered housing, and modest infrastructure now define the landscape—but what is visible on the surface tells only part of the story. Beneath these ordinary scenes lie the buried remains of one of ancient Egypt’s most powerful capitals, still largely hidden from view.\n\nThese images reveal how Qantir has transformed over time—from a site where archaeological remains and ancient structures were once visible, to a landscape shaped by farming and modern development. Yet despite this visible change, the historical city continues to exist underground, preserving its presence beneath the village.'
                    },
                    {
                        type: 'heading',
                        content: 'Agricultural Landscape: Then and Now'
                    },
                    {
                        type: 'paragraph',
                        content: 'A quiet agricultural field in Qantir today was once part of the vast city of Per-Ramesses.\n\nThen: Archaeological remains and structural traces marked parts of the ancient city, reflecting its role as a major urban and industrial center.\n\nNow: Cultivated land and open fields dominate the same space, with little to no visible remains above ground.\n\nWhat appears as farmland today is only the surface—the real city still lies beneath.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Qantir/qan_2_1.jpg`,
                        alt: 'Qantir agricultural landscape then and now'
                    }
                ]
            },
            {
                id: 'qantir-road-trip',
                title: 'Road Trip to Sharqia: A Journey Through Egypt’s Hidden Ancient Capitals',
                description: 'Leaving Cairo behind in the early morning hours, the road to Sharqia offers more than just a change of scenery—it opens a route into some of Egypt’s most overlooked archaeological treasures.',
                image: `${baseUrl}Qantir/qan_3_1.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Leaving Cairo behind in the early morning hours, the road to Sharqia offers more than just a change of scenery—it opens a route into some of Egypt’s most overlooked archaeological treasures. From the quiet fields of Qantir to the buried capital of Avaris and the grandeur of Tanis, this journey blends countryside calm with layers of ancient history waiting to be rediscovered.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_1.jpg`, alt: 'Road trip to Sharqia view 1' },
                    {
                        type: 'heading',
                        content: 'On the Road to Sharqia'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_2.jpg`, alt: 'Road trip to Sharqia view 2' },
                    {
                        type: 'paragraph',
                        content: '● Leaving Cairo early\nWe set off early, hoping to beat Cairo’s traffic—but the roads were already packed.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_3.jpg`, alt: 'Road trip to Sharqia view 3' },
                    {
                        type: 'paragraph',
                        content: '● Heading toward Zagazig\nAs Cairo fades behind you, the road becomes quieter, with a noticeable shift in pace and atmosphere.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_4.jpg`, alt: 'Road trip to Sharqia view 4' },
                    {
                        type: 'paragraph',
                        content: '● Following the signs\nClear signage toward Zagazig helps guide the route step by step into the heart of Sharqia.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_5.jpg`, alt: 'Road trip to Sharqia view 5' },
                    {
                        type: 'paragraph',
                        content: '● Entering the Delta landscape\nGreen fields stretch endlessly on both sides—a defining feature of Sharqia’s rural charm.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_6.jpg`, alt: 'Road trip to Sharqia view 6' },
                    {
                        type: 'heading',
                        content: 'Stop One: Qantir'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_7.jpg`, alt: 'Road trip to Sharqia view 7' },
                    {
                        type: 'paragraph',
                        content: '● A small place with a powerful past\nQantir may appear like a quiet village today, but it once stood at the center of ancient power as part of Per-Ramesses.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_8.jpg`, alt: 'Road trip to Sharqia view 8' },
                    {
                        type: 'heading',
                        content: 'Stop Two: Tell el-Dab‘a (Avaris)'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_9.jpg`, alt: 'Road trip to Sharqia view 9' },
                    {
                        type: 'paragraph',
                        content: '● An ancient capital hidden in plain sight\nJust a short drive away, Tell el-Dab‘a reveals the remains of Avaris, the Hyksos capital—one of the most important archaeological sites in the Delta.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_10.jpg`, alt: 'Road trip to Sharqia view 10' },
                    {
                        type: 'paragraph',
                        content: '● A must-visit stop\nDespite its understated appearance, this site holds major historical significance and should not be missed.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_11.jpg`, alt: 'Road trip to Sharqia view 11' },
                    {
                        type: 'heading',
                        content: 'On the Way to Tanis'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_12.jpg`, alt: 'Road trip to Sharqia view 12' },
                    {
                        type: 'paragraph',
                        content: '● Connecting through Al-Husseiniya Road\nThe road links Qantir and Tell el-Dab‘a to Tanis, making the journey smooth and continuous across the Delta.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_13.jpg`, alt: 'Road trip to Sharqia view 13' },
                    {
                        type: 'heading',
                        content: 'Final Stop: Tanis (San El-Hagar)'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_14.jpg`, alt: 'Road trip to Sharqia view 14' },
                    {
                        type: 'paragraph',
                        content: '● One of ancient Egypt’s greatest cities\nTanis stands as a monumental site filled with ruins, statues, and remnants of a once-powerful royal city.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_15.jpg`, alt: 'Road trip to Sharqia view 15' },
                    {
                        type: 'heading',
                        content: 'Tips for the Journey'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_16.jpg`, alt: 'Road trip to Sharqia view 16' },
                    {
                        type: 'paragraph',
                        content: '● Start early\nMorning travel ensures better lighting for photos and more time to explore each stop.\n\n● Plan your route wisely\nVisit Qantir and Tell el-Dab‘a first, then continue to Tanis.\n\n● Watch the closing time\nTanis (San El-Hagar) typically closes around 4 PM—plan accordingly.\n\n● Take your time\nThe journey itself is part of the experience—enjoy the landscape as much as the destinations.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_3_17.jpg`, alt: 'Road trip to Sharqia view 17' }
                ]
            },
            {
                id: 'qantir-two-cities',
                title: 'Two Cities, One Delta: Where Foreign Rule Gave Way to Empire',
                description: 'Beneath the quiet agricultural fields of Egypt’s northeastern Delta lie the remains of two cities that reflect contrasting political eras—one shaped by foreign rulers who transformed Egypt’s military landscape, and another by powerful pharaohs who built an empire from the same ground.',
                image: `${baseUrl}Qantir/qan_4_1.png`,
                sections: [
                    {
                        type: 'heading',
                        content: 'From Avaris to Per-Ramesses: A Timeline of Power in Egypt’s Delta'
                    },
                    {
                        type: 'paragraph',
                        content: 'This timeline traces the rise of Avaris under the Hyksos and the emergence of Per-Ramesses as a center of Egyptian imperial power in the Delta.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Qantir/qan_4_1.png`,
                        alt: 'Timeline of Power in Egypt’s Delta',
                        isInfographic: true
                    },
                    {
                        type: 'paragraph',
                        content: 'Beneath the quiet agricultural fields of Egypt’s northeastern Delta lie the remains of two cities that reflect contrasting political eras—one shaped by foreign rulers who transformed Egypt’s military landscape, and another by powerful pharaohs who built an empire from the same ground. At Tell el-Dab‘a and nearby Qantir, history does not simply rest underground; it reveals a layered story of power, identity, and transformation.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_4_2.jpg`, alt: 'A glimpse of the region today' },
                    {
                        type: 'heading',
                        content: 'Avaris: Capital of Foreign Rule'
                    },
                    {
                        type: 'paragraph',
                        content: 'Avaris, located at modern Tell el-Dab‘a, once served as the capital of the Hyksos during the Second Intermediate Period (c. 1650–1550 BCE). Originally from the Near East, the Hyksos gradually settled in the Nile Delta before consolidating their political control over northern Egypt.\n\nThe city evolved into a hub of trade and cultural exchange between Egypt and the eastern Mediterranean. More significantly, the Hyksos introduced new military technologies—most notably the horse-drawn chariot—which would later reshape Egyptian warfare.\n\n“This site is very important because it was the capital of the Hyksos, representing a period when foreign rulers controlled northern Egypt,” says Walid Hussein, a tour guide at Tell el-Dab‘a, referring to archaeological remains that include palace structures and settlement layouts confirming Avaris as a major political and cultural center.\n\nExcavations led by Austrian archaeologist Manfred Bietak uncovered palaces, foreign-style architecture, and artifacts that highlight the city’s international character and strategic importance.\n\nThe Hyksos rule eventually came to an end when King Ahmose I launched a military campaign from Thebes, expelling them around 1550 BCE. This victory marked the beginning of the New Kingdom, ushering in an era of political unity and military expansion, during which Egypt reasserted control over the Delta.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_4_3.png`, alt: 'Artifacts and ruins of Avaris' },
                    {
                        type: 'heading',
                        content: 'Per-Ramesses: Capital of Egyptian Imperial Power'
                    },
                    {
                        type: 'paragraph',
                        content: 'Centuries later, in the 13th century BCE, Pharaoh Ramesses II established his royal capital at Per-Ramesses near the site of ancient Avaris. The location was strategically chosen for its proximity to Egypt’s eastern borders and key military routes toward Syria and Canaan.\n\n“Ramesses II chose this location because it was strategically close to Egypt’s eastern borders, allowing him to move his army quickly and maintain control over campaigns in the Levant,” Hussein explains, highlighting the site’s military advantage.\n\nArchaeological findings reveal that Per-Ramesses was far more than a royal residence. The city featured palaces, extensive bronze workshops, and large horse stables—clear evidence of its dual role as both an administrative and military powerhouse.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_4_4.png`, alt: 'Excavation findings of Per-Ramesses' },
                    {
                        type: 'paragraph',
                        content: 'According to tour guide Mohamed Nagdi, the city’s rediscovery was a complex process. For years, archaeologists struggled to locate it as much of its material had been reused in later constructions, while shifts in the Nile’s course buried the remains beneath farmland in Qantir. Excavations in the area, however, eventually uncovered decisive evidence.\n\nNagdi explains that discoveries of large bronze workshops indicate that Per-Ramesses functioned as a major industrial center producing weapons and tools, while vast horse stables point to its role in preparing chariots and horses for the Egyptian army. These findings, he notes, confirm the city’s importance as both a political capital and a military-industrial hub during the New Kingdom.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_4_5.jpg`, alt: 'Remnants of the once-great imperial center' },
                    {
                        type: 'heading',
                        content: 'On the Ground: Voices from the Site'
                    },
                    {
                        type: 'paragraph',
                        content: 'Insights from guides working closely at Tell el-Dab‘a and Qantir add a human dimension to the archaeological narrative, linking historical interpretation with lived experience at the sites.\n\nDrawing from his daily interaction with visitors, Hussein emphasizes that the significance of the area lies in its historical transition. The same landscape, he explains, reflects the shift from foreign Hyksos rule at Avaris to the rise of Egyptian imperial power under Ramesses II—offering a rare, tangible example of how political control in Egypt evolved over time.\n\nNagdi similarly points to the ongoing role of archaeological work in shaping current understanding of the site, noting that continued excavations help historians reconstruct how Per-Ramesses functioned and how it supported Egypt’s military strength during the New Kingdom.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_4_6.png`, alt: 'Voices bridging history and the present' },
                    {
                        type: 'heading',
                        content: 'A Legacy Written in the Delta'
                    },
                    {
                        type: 'paragraph',
                        content: 'The sites of Tell el-Dab‘a and Qantir stand as powerful reminders of Egypt’s evolving political landscape. Avaris reflects a period of foreign rule and cultural interaction, while Per-Ramesses embodies the height of Egyptian imperial power and military organization.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_4_7.jpg`, alt: 'A legacy embedded in the landscape' },
                    {
                        type: 'paragraph',
                        content: 'Together, these twin cities demonstrate how a single region can encapsulate both foreign control and national resurgence—making them essential to understanding the political and military development of ancient Egypt.'
                    },
                    { type: 'image', src: `${baseUrl}Qantir/qan_4_8.jpg`, alt: 'The quiet beauty of Qantir today' }
                ]
            },
            {
                id: 'qantir-secrets-beneath',
                title: 'The Secrets Beneath Qantir: Uncovering Egypt’s Lost Capital',
                description: 'Through AI-generated visuals, this video explores the hidden story of Qantir, the modern village built above the ancient city of Per-Ramesses.',
                image: `${baseUrl}Qantir/WhatsApp Image 2026-05-14 at 3.29.34 PM.jpeg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Through AI-generated visuals, this video explores the hidden story of Qantir, the modern village built above the ancient city of Per-Ramesses. From buried royal stables to forgotten monuments beneath the fields, the video reveals the secrets of a lost capital still hidden underground.'
                    },
                    {
                        type: 'video_placeholder',
                        placeholderText: 'waiting for you'
                    }
                ]
            }
        ]
    },
    {
        id: 'shidet',
        nameEn: 'Shidet (Fayoum)',
        descriptionShort: 'Egypt’s Oasis of Ancient Legends',
        descriptionLong: 'Long before it became today’s Fayoum, Shidet was one of ancient Egypt’s most fascinating cities — a place where religion, politics, and daily life revolved around the legendary crocodile god Sobek. Later renamed Arsinoe by the Greeks, the city became a cultural crossroads filled with temples, markets, homes, and stories preserved in papyri and pottery. From Pharaonic to Roman times, Shidet kept evolving, leaving behind layers of history that still make Fayoum one of Egypt’s most unique ancient landscapes.',
        image: `${baseUrl}Fayoum/Medinet-Madi-fayoum.jpg`,
        lat: 29.3084,
        lng: 30.8428,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        externalLinks: [],
        topics: [
            {
                id: 'fayoum-24-hours',
                title: '24 Hours in Fayoum: Exploring Egypt’s Natural Escape',
                description: 'From the calm waters of Lake Qarun to the waterfalls of Wadi El Rayan and the quiet charm of Fayoum’s villages, this video follows a full day through one of Egypt’s most unique destinations.',
                image: `${baseUrl}Fayoum/Medinet-Madi-fayoum.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'From the calm waters of Lake Qarun to the waterfalls of Wadi El Rayan and the quiet charm of Fayoum’s villages, this video follows a full day through one of Egypt’s most unique destinations. Blending natural landscapes, historical sites, and local culture, the journey captures a side of Fayoum that feels both peaceful and deeply connected to everyday life.'
                    },
                    {
                        type: 'video_placeholder',
                        placeholderText: 'waiting for you'
                    }
                ]
            },
            {
                id: 'fayoum-discover-infographic',
                title: 'Discover Fayoum: Nature, Heritage, and Handicrafts (Infographic)',
                description: 'Known for its unique blend of natural beauty and cultural heritage, Fayoum offers visitors a different side of Egypt beyond ancient temples and crowded cities.',
                image: `${baseUrl}Fayoum/Medinet-Madi-fayoum.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Known for its unique blend of natural beauty and cultural heritage, Fayoum offers visitors a different side of Egypt beyond ancient temples and crowded cities. From the peaceful shores of Lake Qarun and the waterfalls of Wadi El Rayan to the region’s traditional handicrafts and local artistry, Fayoum combines scenic landscapes with a rich cultural identity. This infographic highlights some of the governorate’s most important attractions and experiences.'
                    },
                    {
                        type: 'image',
                        src: `${baseUrl}Fayoum/Medinet-Madi-fayoum.jpg`,
                        alt: 'Discover Fayoum Infographic',
                        isInfographic: true
                    }
                ]
            },
            {
                id: 'fayoum-qasr-qarun',
                title: 'Qasr Qarun: The Hidden Temple of Fayoum',
                description: 'If you drive through Fayoum, it’s very easy to miss Qasr Qarun without even realizing it’s there. From the outside, it doesn’t immediately stand out. It looks quiet, almost forgotten.',
                image: `${baseUrl}Fayoum/fay_3_1.jpg`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'If you drive through Fayoum, it’s very easy to miss Qasr Qarun without even realizing it’s there. From the outside, it doesn’t immediately stand out. It looks quiet, almost forgotten. Some people even mistake it for a structure inspired by Greek architecture. But in reality, this place holds a different kind of story, one that belongs to Egypt.'
                    },
                    { type: 'image', src: `${baseUrl}Fayoum/fay_3_1.jpg`, alt: 'Qasr Qarun: The Hidden Temple' },
                    {
                        type: 'paragraph',
                        content: 'Qasr Qarun Temple dates back to the Greco-Roman period and was originally dedicated to the god Sobek. Unlike many Egyptian temples that are open and filled with sunlight, this one feels closed in. The design is different. The spaces are tighter, the rooms are smaller, and once you step inside, the light slowly disappears.\n\nMoving through the temple feels unexpected. Visitors do not simply observe the site; they experience it gradually, corridor by corridor. The deeper they walk into the narrow passageways, the more noticeable the silence becomes, creating a feeling that separates the temple from many other historical sites in Egypt.'
                    },
                    {
                        type: 'paragraph',
                        content: 'Located near Lake Qarun, the temple offers a striking contrast between enclosed darkness and open natural scenery. After walking through the shadowed interior, the wide view of the lake feels almost abrupt. Many visitors stop there afterward to rest, take photographs, or simply absorb the atmosphere surrounding the site.\n\nDespite its strong visual and historical presence, Qasr Qarun remains far less visited than many other attractions in Fayoum. Tour guide Hany El-Masry says the site still struggles with limited visibility among tourists, noting that most visitors are Egyptians and that many travelers tend to prioritize more widely known destinations in the governorate.'
                    },
                    {
                        type: 'paragraph',
                        content: 'Daily reactions from visitors, however, often reveal the impact the temple leaves once people enter it. A guard stationed at the site says many visitors initially underestimate the temple when they first arrive, seeing it as little more than an old stone structure. Yet according to him, their reactions change noticeably after walking through its interior spaces, particularly because they do not expect such an atmosphere inside.\n\nOfficials also believe sites like Qasr Qarun are beginning to receive greater attention. A representative from the Ministry of Tourism explains that there is increasing interest in promoting lesser-known archaeological destinations through digital media platforms, especially to attract younger audiences and encourage domestic tourism.'
                    },
                    {
                        type: 'paragraph',
                        content: 'Fayoum itself is usually associated with waterfalls, desert landscapes, nature reserves, and open scenery. As a result, its historical landmarks often receive less visibility than its environmental attractions. Qasr Qarun reflects that contrast clearly: it is accessible and historically significant, yet still absent from much of the mainstream tourism conversation.\n\nWhat stands out, however, is how people react once they discover it. Several university students said they had never heard of the temple before encountering photographs and short videos online. For many of them, the experience felt different from visiting a typical tourist attraction. Instead, it carried the feeling of uncovering a hidden place on their own.\n\nThat may ultimately be what makes Qasr Qarun unique. It is not crowded, heavily promoted, or designed to impress visitors immediately. But for those willing to step inside and move slowly through its dark corridors, the temple gradually reveals an experience that feels far more immersive than expected.'
                    }
                ]
            }
        ]
    },
    {
        id: 'amarna',
        nameEn: 'Tell el-Amarna',
        descriptionShort: 'The Lost City of Akhenaten',
        descriptionLong: 'Built by Pharaoh Akhenaten in the heart of Minya, Tell el-Amarna was Egypt’s boldest ancient experiment — a city created for a new religion centered around the sun god Aten. Known in ancient times as Akhetaten, it became the capital of a revolution that changed art, politics, and spirituality almost overnight. But after Akhenaten’s death, the city was mysteriously abandoned, freezing a unique moment of history in time. Today, its tombs, temples, and palace ruins offer one of the clearest snapshots of everyday life in ancient Egypt.',
        image: `${baseUrl}Tell El-Amarna/Copy of IMG_4048.PNG`,
        lat: 27.6449,
        lng: 30.9029,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        externalLinks: [],
        topics: [
            {
                id: 'amarna-revolution',
                title: 'The King Who Changed Everything: The Rise and Fall of Akhenaten’s Amarna Revolution',
                description: 'For more than three millennia, ancient Egypt thrived under a system that seemed eternal. The gods were many, the priests of Amun held immense power, and the Pharaoh stood as the divine bridge between heaven and earth. Then came Akhenaten...',
                image: `${baseUrl}Tell El-Amarna/Copy of IMG_4048.PNG`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'For more than three millennia, ancient Egypt thrived under a system that seemed eternal. The gods were many, the priests of Amun held immense power, and the Pharaoh stood as the divine bridge between heaven and earth. Then came Akhenaten, born Amenhotep IV, a ruler who shattered that continuity. In the fifth year of his reign, he did not merely reform religion; he ignited a revolution. Temples of the old gods were closed, the priesthood of Amun was challenged, and a single deity, Aten, rose above all others. Akhenaten even changed his name to mark this transformation. In a bold act of defiance, he abandoned Thebes and built a new capital in the desert, Akhetaten, known today as Tell el‑Amarna, a city founded not just on stone, but on ideology.'
                    },
                    {
                        type: 'heading',
                        content: 'Redefining Egypt: A Pharaoh Against Tradition'
                    },
                    {
                        type: 'paragraph',
                        content: 'Akhenaten was more than a reformer; he reimagined kingship itself. By abolishing Egypt’s polytheistic system, he struck directly at the political heart of the Amun priesthood, which had long rivaled royal authority. Elevating Aten as the sole god made the Pharaoh the only intermediary between the divine and humanity, concentrating spiritual and political power in his own hands. Even his image changed, gone were the idealized depictions of perfection. Akhenaten appeared human, with elongated features and tender family scenes, signaling a new era where truth replaced divine idealism.'
                    },
                    {
                        type: 'heading',
                        content: 'A Revolution in Art: When Truth Replaced Perfection'
                    },
                    {
                        type: 'paragraph',
                        content: 'The Amarna period transformed Egyptian art as radically as it did religion. Centuries of stylized, rigid representation gave way to naturalism and emotion. Scenes of royal life showed affection, movement, and intimacy, a visual language that broke with centuries of convention. This artistic awakening remains one of the most distinctive chapters in Egypt’s visual history.'
                    },
                    {
                        type: 'heading',
                        content: 'The Tour Guide’s View: A King Who Feels Human'
                    },
                    {
                        type: 'paragraph',
                        content: '“Tourists are always fascinated by Akhenaten’s Amarna period,” says Laila Mansour, a tour guide at Tell el‑Amarna. “Unlike other pharaohs who appear distant and divine, Akhenaten is shown as a husband and father. Visitors feel a personal connection when they see him with his family, it makes him seem closer than any other king.”'
                    },
                    {
                        type: 'heading',
                        content: 'The Historian’s Debate: Visionary or Failed Ruler?'
                    },
                    {
                        type: 'paragraph',
                        content: 'According to Dr. Michael Emad, Egyptologist, Akhenaten’s reign was intellectually groundbreaking but politically fragile. “The Amarna Letters show desperate pleas from Egypt’s allies for military aid, many unanswered,” he explains. “Akhenaten was ahead of his time in his pursuit of monotheism, but his obsession with ideology came at the cost of governance. Egypt’s influence abroad weakened as his domestic revolution deepened.”'
                    },
                    {
                        type: 'heading',
                        content: 'The Cost of Transformation: Isolation and Decline'
                    },
                    {
                        type: 'paragraph',
                        content: 'Akhenaten’s reforms alienated the powerful priesthood and destabilized Egypt’s internal balance. As he built his utopian city, foreign territories slipped from control. The dream of Akhetaten became a symbol of isolation, a kingdom consumed by its own vision.'
                    },
                    {
                        type: 'heading',
                        content: 'The End: Collapse of a Dream'
                    },
                    {
                        type: 'paragraph',
                        content: 'After seventeen years, the revolution ended as abruptly as it began. Akhenaten’s successor, Tutankhamun, restored the old gods and returned the capital to Thebes. The heretic king’s name was erased from monuments, his legacy buried under the sands of orthodoxy. Yet history could not silence him.'
                    },
                    {
                        type: 'heading',
                        content: 'Lasting Legacy: Why Akhenaten Still Matters'
                    },
                    {
                        type: 'paragraph',
                        content: 'Akhenaten remains one of history’s most enigmatic figures, not Egypt’s greatest administrator, but perhaps its boldest thinker. He dared to rebuild the world’s oldest civilization from its foundations, proving that even in a society defined by permanence, one man could challenge eternity itself.\n\nAkhenaten was not just a king, he was an idea.'
                    }
                ]
            },
            {
                id: 'amarna-clay-tablets',
                title: 'From Clay Tablets to Clicks: How Amarna’s Letters Shaped the Way We Communicate',
                description: 'Long before email inboxes and instant messaging, the Pharaohs of Egypt were already experimenting with one of history’s earliest international mailing systems.',
                image: `${baseUrl}Tell El-Amarna/Copy of IMG_4048.PNG`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Long before email inboxes and instant messaging, the Pharaohs of Egypt were already experimenting with one of history’s earliest international mailing systems. In the desert city of Amarna, Akhenaten’s scribes etched diplomatic correspondence onto clay tablets, the famous Amarna Letters, and dispatched them across empires. These messages carried pleas for military aid, negotiations over alliances, and even personal appeals, revealing a world connected by words rather than armies. Today, as we swipe through WhatsApp chats or send a quick email, the echoes of Amarna remind us that the desire to communicate across distance is as old as civilization itself.'
                    }
                ]
            },
            {
                id: 'amarna-silent-chambers',
                title: 'Inside Amarna’s Silent Chambers: Tombs That Tell a Revolution’s Story',
                description: 'Carved into the cliffs overlooking Akhetaten, the tombs of Amarna are more than burial sites — they are snapshots of a short‑lived experiment in faith and power.',
                image: `${baseUrl}Tell El-Amarna/Copy of IMG_4048.PNG`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Carved into the cliffs overlooking Akhetaten, the tombs of Amarna are more than burial sites — they are snapshots of a short‑lived experiment in faith and power. Here lie the nobles, officials, and courtiers who followed Akhenaten into his desert capital, their walls etched with scenes of devotion to Aten and glimpses of daily life in a city built on ideology. Unlike the grand temples of Thebes, Amarna’s tombs reflect a world in transition: austere yet intimate, revolutionary yet fragile. Each chamber reveals not only who was buried there, but how a radical king reshaped even the art of death.'
                    }
                ]
            },
            {
                id: 'amarna-everyday-firsts',
                title: 'Did You Know? Everyday Firsts Born in Amarna',
                description: 'Beyond its radical temples and revolutionary art, Amarna was also a city of surprising “firsts.”',
                image: `${baseUrl}Tell El-Amarna/Copy of IMG_4048.PNG`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Beyond its radical temples and revolutionary art, Amarna was also a city of surprising “firsts.” Archaeologists point to evidence of innovations that feel strikingly modern, from one of the earliest known bridges to what may have been the very first toilet seat. These details remind us that Akhenaten’s desert capital was not only a stage for ideological change but also a laboratory of daily life. Through text, photos, and AI‑generated visuals, this story explores how ordinary inventions in Amarna echo into the way we live today, proving that history’s greatest revolutions often begin with the simplest ideas.'
                    }
                ]
            },
            {
                id: 'amarna-travelers-guide',
                title: 'Walking Through Amarna: A Traveler’s Guide to Egypt’s Forgotten Capital',
                description: 'Tell el‑Amarna, once Pharaoh Akhenaten’s radical capital, is today a haunting archaeological site in Middle Egypt.',
                image: `${baseUrl}Tell El-Amarna/Copy of IMG_4048.PNG`,
                sections: [
                    {
                        type: 'paragraph',
                        content: 'Tell el‑Amarna, once Pharaoh Akhenaten’s radical capital, is today a haunting archaeological site in Middle Egypt. Visitors can explore tombs carved into cliffs, the remains of palaces and temples, and the desert altars dedicated to Aten. While the city itself is abandoned, the journey offers a rare chance to step into history, with practical tips from residents and tour guides helping modern travelers navigate this remote destination.'
                    }
                ]
            }
        ]
    },
    {
        id: 'akhmim',
        nameEn: 'Akhmim',
        descriptionShort: 'Where Temples meet Textiles',
        descriptionLong: 'Set along the Nile in Sohag, Akhmim was one of ancient Egypt’s most vibrant cities — where religion, art, and industry all came together. Known in ancient times as Khent-Min and later Panopolis, it was famous for worshipping Min, the god of fertility, and for its massive temples and stunning statues like the iconic Merit-Amun. But Akhmim wasn’t just spiritual — it was also a powerhouse of textile and silk production, earning a reputation as the “Manchester of Prehistory.” Even today, the city carries the echoes of a place that once thrived with creativity and culture.',
        image: `${baseUrl}Akhmim/Copy of IMG-20260425-WA0013.jpg`,
        lat: 26.5645,
        lng: 31.7458,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        externalLinks: []
    },
    {
        id: 'abydos',
        nameEn: 'Abydos',
        descriptionShort: 'Egypt’s Sacred City of Afterlife',
        descriptionLong: 'Abydos wasn’t just an ancient city — it was one of the most sacred places in all of Egypt. Located in Sohag, this legendary site became the burial ground of Egypt’s earliest kings and later the spiritual center of Osiris, god of the afterlife. For thousands of years, pilgrims traveled here to honor the dead, while massive temples and royal tombs shaped the story of ancient Egyptian power and belief. From the famous Abydos King List to hidden funerary complexes, Abydos remains a place where mythology, history, and mystery all meet.',
        image: `${baseUrl}Abydos/Abydos-Temple-Trips-in-Egypt-2.jpg`,
        lat: 26.1852,
        lng: 31.9195,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        externalLinks: []
    },
    {
        id: 'thebes',
        nameEn: 'Thebes (Luxor)',
        descriptionShort: 'A City Built for Eternity',
        descriptionLong: 'Once the beating heart of ancient Egypt, Thebes — modern-day Luxor — was a city of gods, kings, and unimaginable wealth. Split by the Nile into the “city of the living” on the East Bank and the royal necropolis on the West, it became the center of power during the New Kingdom. Home to legendary sites like Karnak Temple, Luxor Temple, and the Valley of the Kings, Thebes was where pharaohs ruled, traders gathered, and history was carved into stone. Even thousands of years later, its massive ruins still feel larger than life.',
        image: `${baseUrl}Thebes/medinet-habu.jpg`,
        lat: 25.7205,
        lng: 32.6132,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        externalLinks: []
    }
];
