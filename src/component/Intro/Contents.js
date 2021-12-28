import { AnchorButtonUnderline, LinkButtonUnderline } from '../shared/Buttons';
import { Color } from '../variables';
const { primary } = Color;
export const InitialContent = () => {
	return (
		<>
			<p>
				Hi there! Thanks for visiting my site. My name is Miwa. I am a design
				technologist by trade and an avid home cook in my free time.
			</p>
			<p>
				As a <strong>design technologist</strong>, I am passionate about
				designing and front-end coding. I also enjoy exploring new technology
				and trend.
			</p>
			<p>
				<strong>Design system</strong> is definitely something that I am
				enthusiastic about. <strong>WHY?</strong>
			</p>
			<p>
				It is just like cooking in a well-organized kitchen where all the tools
				and ingredients are placed in right place so that I can enjoy cook at
				ease.
			</p>
			<p>
				It is also like KonMari Method. We can tidy up and save components that{' '}
				<i>spark joy</i>! Well, not quite... but instead of creating new
				components every time, we can reuse components so that they carry the
				same look and feel throughout applications.
			</p>
			<p>
				It not only improves user experience and interface but also we can code
				more efficiently.
			</p>
		</>
	);
};
export const MoreContent = () => {
	return (
		<>
			<p>
				<strong>In my free time</strong>, there are a lot of things that I
				enjoy. As I mentioned earlier, I am an avid home cook. In fact I started
				a <strong>Youtube channel</strong> called
				<AnchorButtonUnderline
					href='https://www.youtube.com/channel/UCYgA0xoTDkBGKDKRevWIweA'
					color={primary}
					target='_blank'
					rel='noreferrer'
				>
					Miwa Kaur's Kitchen
				</AnchorButtonUnderline>
				where I share delicious healthy plantbased recipes.
			</p>
			<p>
				I film, photograph then edit with Photoshop, Premiere Pro and
				Illustrator. It's been a while since I uploaded contents as I have been
				focusing on coding lately. I promise I'll make more videos sometime
				soon!
			</p>
			<p>
				In fact, I am about to start building a React app for recipes. So stay
				tuned!
			</p>
			<p>
				I am originally from Tokyo Japan and currently live in Long Island NY
				with my husband who is from Punjab India. I also cohabit with a 7year
				old rescued cat named Love.
			</p>
			<p>
				Please feel free to say hi through{' '}
				<LinkButtonUnderline to='contact' color={primary}>
					contact form.
				</LinkButtonUnderline>
			</p>
		</>
	);
};
