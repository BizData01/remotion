import { registerRoot } from 'remotion';
import { Composition } from 'remotion';
import { MyVideo } from './Video';

registerRoot(() => {
	return (
		<>
			<Composition
				id="MyVideo"
				component={MyVideo}
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
});
