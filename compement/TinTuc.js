import React, { Component, createRef } from 'react';
import { StyleSheet, SafeAreaView, BackHandler,Button,TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends Component {
  webViewRef = createRef();

  handleGoBack = () => {
    if (this.webViewRef.current) {
      this.webViewRef.current.goBack();
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Button title="Quay lại" onPress={this.handleGoBack} /> */}
        <TouchableOpacity onPress={this.handleGoBack}>
                <Ionicons style={{ marginBottom:2, marginLeft: 8 }} name="arrow-back-outline" size={30} color="#000" />
            </TouchableOpacity>
        <WebView
          ref={this.webViewRef}
          source={{ uri: 'https://cuunews.net/' }}
          onNavigationStateChange={(navState) => {
            if (!navState.canGoBack) {
              // Nếu không thể quay lại trang trước đó, vô hiệu hóa nút "Quay lại"
              // hoặc thực hiện hành động khác tại đây
            }
          }}
        />
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
