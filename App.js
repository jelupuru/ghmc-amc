import React from 'react';
import { WebView } from 'react-native-webview';
import { View, ActivityIndicator } from 'react-native';

const MyWebView = () => {
  return (
    <WebView
      source={{ uri: 'http://amc.neogeoinfo.in:8605/m' }} // Your URL
      javaScriptEnabled={true}
      domStorageEnabled={true}
      allowsInlineMediaPlayback={true}
      originWhitelist={['*']}  // Allow all origins
      mixedContentMode="always" // For Android: allow HTTP/HTTPS mixed content
      renderLoading={() => <ActivityIndicator size="large" color="blue" />}
      startInLoadingState={true}
    />
  );
};

export default MyWebView;
