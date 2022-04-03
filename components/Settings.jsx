const { React } = require('powercord/webpack');
const KeybindRecorder = require('./KeybindRecorder');

module.exports = class MinimizeShortcutSettings extends React.Component {
	render() {
		const { getSetting, updateSetting } = this.props;

		return (
			<div>
				<KeybindRecorder
					value={getSetting('minimize-shortcut')}
					onChange={(e) => {
						this.setState({ value: e });
						updateSetting('minimize-shortcut', e);
					}}
					onReset={() => {
						this.setState({ value: 'Control+G' });
						updateSetting('minimize-shortcut', 'Ctrl+G');
					}}
				>
					Choose a shortcut
				</KeybindRecorder>
			</div>
		);
	}
};
