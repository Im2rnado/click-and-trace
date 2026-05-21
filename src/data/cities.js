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
        externalLinks: []
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
        externalLinks: []
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
        externalLinks: []
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
        externalLinks: []
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
