package com.instagramclone;

import android.app.Application;
import android.content.Context;

import com.RNFetchBlob.RNFetchBlobPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.cmcewen.blurview.BlurViewPackage;
import com.facebook.react.shell.MainReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativecommunity.cameraroll.CameraRollPackage;
import com.reactnativecommunity.cameraroll.CameraRollPackage;
//import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.BV.LinearGradient.LinearGradientPackage;

import org.reactnative.camera.RNCameraPackage;

import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;

import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost =
            new ReactNativeHost(this) {
                @Override
                public boolean getUseDeveloperSupport() {
                    return BuildConfig.DEBUG;
                }

                @Override
                protected List<ReactPackage> getPackages() {

                    return Arrays.<ReactPackage>asList(
                            // Packages that cannot be autolinked yet can be added manually here, for example:
                            // packages.add(new MyReactNativePackage());
                            new MainReactPackage(),
                            new RNCameraPackage(),
                            new RNGestureHandlerPackage(),
                            new VectorIconsPackage(),
                            new LinearGradientPackage(),
                            new ReanimatedPackage(),
                            new RNFetchBlobPackage(),
                            new SvgPackage(),
                            new CameraRollPackage(),
                            new ReactVideoPackage()
                    );

                }

                @Override
                protected String getJSMainModuleName() {
                    return "index";
                }
            };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        initializeFlipper(this); // Remove this line if you don't want Flipper enabled
    }

    /**
     * Loads Flipper in React Native templates.
     *
     * @param context
     */
    private static void initializeFlipper(Context context) {
        if (BuildConfig.DEBUG) {
            try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
                Class<?> aClass = Class.forName("com.facebook.flipper.ReactNativeFlipper");
                aClass.getMethod("initializeFlipper", Context.class).invoke(null, context);
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } catch (NoSuchMethodException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            }
        }
    }
}
