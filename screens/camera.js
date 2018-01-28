import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.front,
      timer: 10,
      picture: '',
    };

    this.takePicture = this.takePicture.bind(this);
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  componentDidMount() {
    this.takePicture();
  }
  takePicture() {
    let savePic = async () => {
      let photo = await this.camera.takePictureAsync();
      console.log(photo);
    };
    let snap = setInterval(() => {
      this.setState({ timer: this.state.timer - 1 });
      if (this.state.timer === 0) {
        clearInterval(snap);
        savePic();
      }
    }, 1000);
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#8BC34A',
          }}>
          <Text style={{ fontSize: 60, fontWeight: 'bold', color: '#C34A4E' }}>SMILE</Text>
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              flex: 1,
              marginTop: '5%',
              marginBottom: '10%',
              width: '50%',
            }}
            type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: 100, marginBottom: 10, color: '#C34A4E' }}>
                {this.state.timer === 0 ? '' : this.state.timer}
              </Text>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
