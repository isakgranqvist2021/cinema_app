/** @format */

import React from 'react';
import ContainerComponent from 'Components/ContainerComponent';
import DatesComponent from './DatesComponent';
import HeaderComponent from './HeaderComponent';
import PublishComponent from './PublishComponent';

const components = [PublishComponent, DatesComponent];

export default function DashboardComponent(): JSX.Element {
	const [tab, setTab] = React.useState<number>(0);

	const changeTab = (newTab: number): void => {
		setTab(newTab);
	};

	return (
		<ContainerComponent>
			<h1>Dashboard</h1>
			<HeaderComponent active={tab} setTab={changeTab} />

			{components.map((Component: React.FunctionComponent, i: number) =>
				tab === i ? <Component /> : null
			)}
		</ContainerComponent>
	);
}
