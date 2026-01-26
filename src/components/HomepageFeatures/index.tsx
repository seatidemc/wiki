import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
	title: string;
	src: string;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Seatide 的信息中心',
		src: 'img/tablet_touch_panel.png',
		description: (
			<>
				与服务器有关的参考信息均会记录在这里，稳定运行，随时翻阅。
			</>
		)
	},
	{
		title: '专注于服务器内容',
		src: 'img/animal_chara_computer_azarashi.png',
		description: (
			<>
				专注记录与服务器本身紧密关联的信息，不含无关内容，帮助玩家更好地了解服务器。
			</>
		)
	},
	{
		title: '玩家社区共建',
		src: 'img/computer_mob_programming.png',
		description: (
			<>
				玩家可随时参与到服务器文档的编写中，分享你对服务器的见解。
			</>
		)
	}
];

function Feature({ title, src, description }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<img className={styles.featureImg} src={src} />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
