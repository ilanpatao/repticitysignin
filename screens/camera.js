import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.front,
      timer: 6,
      picture: '',
      faceDetected: false,
      message: 'Place Your Face In The Circle',
    };

    this.takePicture = this.takePicture.bind(this);
    this.checkforFace = this.checkforFace.bind(this);
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
      let photo = await this.camera.takePictureAsync({ quality: 0.5, base64: true });
      this.setState({ photo });
      console.log('photo taken');
    };
    let snap = setInterval(() => {
      if (this.state.faceDetected) {
        this.setState({ message: 'SMILE' });
        this.setState({ timer: this.state.timer - 1 });
        if (this.state.timer === 0) {
          clearInterval(snap);
          savePic();
        }
      } else {
        this.setState({ timer: 6 });
        this.setState({ message: 'Place Your Face In The Circle' });
      }
    }, 1000);
  }

  checkforFace(faces) {
    console.log(faces);
    faces.length === 0 ? this.setState({ faceDetected: false }) : this.setState({ faces: true });
    if (faces.length === 0) {
      console.log('noface');
      this.setState({ faceDetected: false });
    } else {
      console.log('face');
      this.setState({ faceDetected: true });
    }
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
          <Text style={{ fontSize: 60, fontWeight: 'bold', color: '#C34A4E' }}>
            {this.state.message}
          </Text>
          <View
            style={{
              flex: 1,
              width: '50%',
              height: '50%',
              borderColor: 'black',
              marginTop: '5%',
              marginBottom: '10%',
            }}>
            <Camera
              onFacesDetected={face => this.checkforFace(face.faces)}
              ref={ref => {
                this.camera = ref;
              }}
              style={{
                flex: 1,
                borderRadius: 350,
                borderColor: '#8BC34A',
                borderWidth: 10,
                width: '100%',
                overflow: 'hidden',
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
                  {this.state.timer === 0 || this.state.timer === 6 ? '' : this.state.timer}
                </Text>
              </View>
            </Camera>
          </View>
        </View>
      );
    }
  }
}
