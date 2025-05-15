import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bolt text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
          >Introduction</p>
          <h2 className={styles.sectionHeadText}
            >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-4 text-secondary text=[17px] max-w-5xl leading-[30px]"
      >
        After graduating back in December of '22, I had a rough start to my career. The job market was extremely competitive, and I was dealing with too many personal issues. I lost people close to me, and my parents divorced. I traveled to Taiwan to receive a niche surgery to treat my dehabilitating Hyperhidrosis. I then spent almost a year living with my mother and helping with her business by becoming an insurance broker, which I was not interested in. For me, the entirety of the last few years have been about creating healthy space from my troubled family, healing, and about growing up. I've finally pulled myself back together, with the enthusiasm and passion for computers and technology that I've had since I was 5 years old. I have a strong background in both front and back-end development across many popular frameworks as well as in data analytics, and my interests mostly lie in Human-Computer Interaction. I'm desperate for an opportunity to prove myself, and I thank you for your time and consideration!

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
           {index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")