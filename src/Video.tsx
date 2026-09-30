import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import data from './Data.json';

export const MyVideo = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	return (
		<div
			style={{
				flex: 1,
				backgroundColor: data.colors.background,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				fontFamily: 'Noto Sans KR, sans-serif',
				color: data.colors.text,
				padding: 40,
			}}
		>
			<div
				style={{
					fontSize: 60,
					fontWeight: 'black',
					marginBottom: 40,
					opacity: interpolate(frame, [0, 20], [0, 1]),
				}}
			>
				{data.projectTitle}
			</div>

			<div style={{ width: '100%' }}>
				{data.lectures.map((lecture, i) => {
					const startFrame = 20 + i * 15;
					const opacity = interpolate(frame, [startFrame, startFrame + 10], [0, 1], {
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
					});

					return (
						<div
							key={i}
							style={{
								display: 'flex',
								alignItems: 'center',
								marginBottom: 20,
								opacity,
								transform: `translateY(${interpolate(
									frame,
									[startFrame, startFrame + 10],
									[20, 0],
									{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
								)}px)`,
							}}
						>
							<div
								style={{
									backgroundColor: data.colors.accent,
									width: 50,
									height: 50,
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontWeight: 'bold',
									marginRight: 20,
								}}
							>
								{lecture.step}
							</div>
							<div style={{ flex: 1 }}>
								<div style={{ fontSize: 32, fontWeight: 'bold' }}>{lecture.title}</div>
								<div style={{ fontSize: 20, opacity: 0.8 }}>
									{lecture.desc} ({lecture.tool})
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{/* Decorative circle based on USER.md */}
			<div
				style={{
					position: 'absolute',
					width: 600,
					height: 600,
					borderRadius: '50%',
					backgroundColor: data.colors.accent,
					opacity: 0.1,
					top: -100,
					right: -100,
				}}
			/>
		</div>
	);
};
