import React, { Component } from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { urls } from "@api/urls";
import { color } from "@values/colors";
import _Text from "@text/_Text";
import ImageViewer from "react-native-image-zoom-viewer";
import IconPack from "@login/IconPack";

const { height, width } = Dimensions.get("window");
// LRGP203

var images = [];
var imagesLength = "";

export default class BannerImageNewPlugin extends Component {
  constructor(props) {
    super(props);
    const data = this.props.route.params.bannerDataImagePath;
    const url = this.props.route.params.baseUrl;

    this.state = {
      bannerDataImagePath: data,
      baseUrl: url,
      currentPage: 0,
      slider1ActiveSlide: 0,
      //   images: [],
    };
  }

  componentDidMount = () => {
    const data = this.props.route.params.bannerDataImagePath;
    let url2 = urls.imageUrl + (data !== undefined && data.zoom_image);

    let arr = [];
    for (let i = 0; i < data.image_name.length; i++) {
      arr.push({ url: url2 + data.image_name[i] });
    }

    images = arr;
    imagesLength = arr.length;
    // this.setState({ images: arr });
  };

  footer = (currentIndex) => {
    return (
      <View style={styles.indicatorView}>
        <Text style={styles.indicator}>
          {currentIndex + 1 + "/" + imagesLength}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
        <View style={{ height: hp(7), backgroundColor: color.white }}>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{ flex: 0.1, paddingLeft: hp(3) }}
            >
              <Image
                defaultSource={require("../../assets/image/close1.png")}
                source={require("../../assets/image/close1.png")}
                style={{ height: hp(2.5), width: hp(2.5) }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <ImageViewer
            imageUrls={images}
            failImageSource={{ url: IconPack.APP_LOGO }}
            renderIndicator={() => (currentIndex, imagesLength) =>
              currentIndex + "/" + imagesLength}
            renderFooter={(currentIndex) => this.footer(currentIndex)}
            footerContainerStyle={styles.indicatorView}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: height - 150,
    width: width,
  },
  indicatorView: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: width,
  },
  indicator: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
