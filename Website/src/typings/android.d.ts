interface Android {
  // Root management
  exec(command: string): void;
  execResult(command: string): string;
  isAppGrantedRoot(): boolean;

  // Preference management
  getSharedPreferences: () => {
    setPref(key: string, value: string): void;
    getPref(key: string): string;
    removePref(key: string): void;
    clearPrefs(): void;
  };

  phoneComponents: () => {
    setStatusbarColor(color: string): void;
    setStatusbarBackgroundWhite(): void;
    getNavigationBarHeight(): int;
    getStatusBarHeight(): int;
  };

  // Storage management
  hasStoragePermission(): boolean;
  requestStoargePermission(): void;

  // Version managment
  version: () => {
    getAppVersionCode(): int;
    getAppVersionName(): string;
    getAppPackageId(): string;
    getAndroidVersionCode(): int;
  };

  // Link
  open(link: string): void;
  downloadFile(urlStr: string, output: string): void;

  // Storage
  getDataDir(): string;

  SuFile: (path: string) => {
    storage: () => {
      read(): string;
    };
    system: () => {
      read(): string;
      list(): string;
      exists(): boolean;
      delete(): boolean;
    };
  };

  // Others
  close(): void;
  makeToast(content: string, duration: int): void;
  log(TAG: string, message: string): void;
}

export default Android;