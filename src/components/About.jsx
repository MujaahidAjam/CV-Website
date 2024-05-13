import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            As a junior software engineer, I am deeply passionate about harnessing technology to address real-world challenges.
            Equipped with a robust background in System Development and currently serving as a full-stack web developer,
            I am dedicated to continually expanding my knowledge and skills in the dynamic realm of software engineering.
            I thrive in collaborative settings, where I eagerly contribute my expertise in coding and problem-solving
            to foster innovation and deliver impactful solutions of the highest quality.
            Beyond the confines of code, you'll often find me fueled by a blend of coffee and code,
            actively exploring emerging technologies and staying abreast of the latest industry trends.
            </p>
        </article>
      </div>
    </section>
  );
};
export default About;
