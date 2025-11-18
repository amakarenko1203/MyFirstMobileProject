# Android SDK Environment Setup

This guide will help you set up the Android SDK environment variables required for mobile testing.

## Prerequisites

- Android SDK installed on your system
- Administrator privileges (Windows) or sudo access (Mac)

## Setup Instructions

### Windows

1. Run the setup script with administrator privileges:
   ```powershell
   setup-android-sdk-windows.bat
   ```

2. When prompted, enter your Android SDK path. The default location is typically:
   ```
   C:\Users\YourName\AppData\Local\Android\Sdk
   ```

3. The script will:
   - Set the `ANDROID_HOME` environment variable
   - Add the following directories to your system PATH:
     - `platform-tools`
     - `tools`
     - `tools\bin`

4. **Important:** Restart your command prompt or PowerShell after the setup completes for changes to take effect.

5. Verify the setup by running:
   ```powershell
   adb --version
   ```

### macOS

1. Make the script executable:
   ```bash
   chmod +x setup-android-sdk-mac.sh
   ```

2. Run the setup script:
   ```bash
   ./setup-android-sdk-mac.sh
   ```

3. When prompted, enter your Android SDK path. The default location is typically:
   ```
   /Users/YourName/Library/Android/sdk
   ```

4. The script will add environment variables to your shell profile (`~/.zshrc` or `~/.bash_profile`).

5. Reload your shell configuration:
   ```bash
   source ~/.zshrc
   # or
   source ~/.bash_profile
   ```

6. Verify the setup by running:
   ```bash
   adb --version
   ```

## Common Android SDK Locations

### Windows
- `C:\Users\<YourName>\AppData\Local\Android\Sdk`
- `C:\Program Files\Android\Sdk`

### macOS
- `/Users/<YourName>/Library/Android/sdk`
- `~/Library/Android/sdk`

## Troubleshooting

### Windows

**Issue:** "The specified Android SDK path does not exist"
- Verify the path is correct
- Check that Android Studio is installed
- Use the Android SDK Manager in Android Studio to ensure the SDK is installed

**Issue:** "platform-tools directory not found"
- Open Android Studio
- Go to Tools → SDK Manager
- Ensure "Android SDK Platform-Tools" is installed

**Issue:** `adb` command not recognized after setup
- Restart your terminal/PowerShell window
- Verify the PATH was updated: `echo %PATH%`
- Check ANDROID_HOME: `echo %ANDROID_HOME%`

### macOS

**Issue:** Permission denied when running the script
- Ensure the script is executable: `chmod +x setup-android-sdk-mac.sh`
- You may need to run with sudo if modifying system files

**Issue:** Changes not taking effect
- Ensure you've sourced your profile: `source ~/.zshrc`
- Restart your terminal
- Check if the paths are in your profile: `cat ~/.zshrc | grep ANDROID`

## Verifying Your Setup

After successful setup, you should be able to run these commands:

```bash
# Check ADB version
adb --version

# List connected devices
adb devices

# Check ANDROID_HOME
echo $ANDROID_HOME    # macOS/Linux
echo %ANDROID_HOME%   # Windows
```

## How to Automate Mobile Tests

### Testing Workflow

1. **Test Case Creation**
   - Create your test cases before implementation

2. **Manual Execution**
   - Execute the test manually to understand the flow

3. **Automation**

### Prerequisites Setup

#### Start your emulator
Launch your Android emulator or connect a physical device.

#### Verify device connection
```bash
adb devices
```

> ⚠️ **Troubleshooting:** If you see "adb not recognized", add the Android SDK to your system environment variables and restart all terminals and applications.

#### Start Appium server

Before starting, verify UIAutomator2 driver is installed:
```bash
appium driver list --installed
```

Then start the Appium server:
```bash
appium
```

### Element Locator Strategy

Priority order for locators:

1. 🥇 **Accessibility ID** (Best practice)
2. 🥈 **Resource ID**
3. 🥉 **UiAutomator**

### Common Issues & Solutions

| Error | Solution |
|-------|----------|
| "Cannot find server at URL" | Appium server is not running. Start the server with `appium` command. |
| "UIAutomator2 not found" | Run `appium driver list --installed` to verify installation. |
| Connection failures | Verify your URL, port, path, and capabilities are correct. |

### Implementation Steps

1. **Locate elements using Appium Inspector**
   - Follow the priority order: Accessibility ID → Resource ID → UiAutomator

2. **Implement Page Object pattern**
   - Create page classes for better maintainability

3. **Write your tests**
   - Ensure all capabilities are properly configured

### Appium Inspector Capabilities

Use these capabilities in Appium Inspector (with your actual APK path):

```json
{
  "platformName": "Android",
  "appium:deviceName": "emulator-5554",
  "appium:automationName": "UiAutomator2",
  "appium:app": "C:\\Users\\YourName\\Documents\\Playwright\\Pet-store-API-testing\\MyFirstMobileProject\\tests\\app.apk"
}
```

Server URL: `http://localhost:4723`

## Next Steps

Once your environment is configured:
1. Install project dependencies: `npm install`
2. Connect your Android device or start an emulator
3. Run `adb devices` to verify device connectivity
4. Start Appium server: `appium`
5. Begin running your mobile tests: `npm test`

## Additional Resources

- [Android SDK Documentation](https://developer.android.com/studio/command-line)
- [ADB Documentation](https://developer.android.com/studio/command-line/adb)
- [Android Studio Download](https://developer.android.com/studio)
- [Appium Documentation](https://appium.io/docs/en/latest/)
- [WebDriverIO Documentation](https://webdriver.io/)
