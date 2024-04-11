import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description:
            "Transform with our weight training classes, led by expert coaches. Whether you're new or advanced, our sessions focus on proper form and strength gains. Join us to sculpt your body and boost confidence",
        image: image1,
    },
    {
        name: "Yoga Classes",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description:
            "Get strong and defined with our Ab Core classes. Led by expert trainers, these sessions target your core muscles for a toned midsection. Join us to strengthen your core and improve posture",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description:
            "Embark on fitness adventures with our Adventure Classes. Led by experienced instructors, these sessions offer outdoor challenges like hiking, rock climbing, and obstacle courses. Join us for exhilarating workouts in the great outdoors",
        image: image4,
    },
    {
        name: "Fitness Classes",
        image: image5,
    },
    {
        name: "Training Classes",
        description:
            "Unleash your potential with our Training Classes. Led by expert coaches, these sessions focus on functional movements, agility, and strength. Whether you're an athlete or beginner, join us for personalized training and results",
        image: image6,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return <section id="ourclasses" className="w-full bg-primary-100 py-40 ">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div className="md:w-3/5">
                    <Htext>OUR CLASSES</Htext>
                    <p className="py-5">
                    Our gym offers diverse classes for all levels, from HIIT to yoga and dance. Led by expert instructors, our classes provide fun and effective workouts to help you achieve your fitness goals
                    </p>
                </div>

            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item, index) => (
                        <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>;
}

export default OurClasses