import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6
  shadow-dark absolute dark:text-dark dark:bg-light
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
    xs:text-dark xs:dark:text-light xs:font-bold xs:text-xs
  "
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Activities = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">النشاطات</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:circularDarkLg
      md:bg-circularLightMd md:dark:circularDarkMd
      sm:bg-circularLightSm sm:dark:circularDarkSm
      ">
        {/* Center */}
        <Skill name={`دعم المحتاجين`} x={`0vw`} y={`0vw`} />
        {/* First Circle */}
        <Skill name={`بناء المنازل`} x={`-5.5vw`} y={`-6.8vw`} />
        <Skill name={`صدقات`} x={`13vw`} y={`-0vw`} />
        <Skill name={`توصيل المياه`} x={`3vw`} y={`7.5vw`} />

        {/* Second Circle */}
        <Skill name={`أسقف منازل`} x={`-19vw`} y={`2vw`} />
        <Skill name={`مشاريع صغيرة`} x={`11vw`} y={`-10vw`} />
        <Skill name={`تزويج الفقراء`} x={`0vw`} y={`12vw`} />

        {/* Third Circle */}
        <Skill name={`تعليم حرف`} x={`-3vw`} y={`-15vw`} />
        <Skill name={`بناء مساجد`} x={`-24vw`} y={`6vw`} />
        <Skill name={`تحفيظ القرآن`} x={`24vw`} y={`6vw`} />
        <Skill name={`كفالة أيتام`} x={`-19vw`} y={`-10vw`} />
        <Skill name={`مساعدات مرضية`} x={`23vw`} y={`6vw`} />
        {/* Fourth Circle */}
        <Skill name={`طلبة العلم`} x={`-20vw`} y={`15vw`} />
        <Skill name={`تعليم حرف`} x={`0vw`} y={`19vw`} />
        <Skill name={`بناء منازل`} x={`20vw`} y={`15vw`} />
        <Skill name={`تعليم التجويد`} x={`31vw`} y={`-5vw`} />
        <Skill name={`دورات صيفية`} x={`-31vw`} y={`-5vw`} />
      </div>
    </>
  );
};

export default Activities;
