export interface UserProfile {
  name: string;
  email: string; // Used as identifier
  avatarUrl: string;
  slogan: string;
  bankName: string;
  bankAccount: string;
  walletName: string;
  walletAccount: string;
  qrCodeUrl: string;
}

export const DEFAULT_PROFILE: UserProfile = {
  name: "VỸ",
  email: "vytranvan120505@gmail.com",
  avatarUrl: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Lucky",
  slogan: "\"Sự giàu có của tôi phụ thuộc vào lòng tốt của bạn\"",
  bankName: "Techcombank",
  bankAccount: "571 205 2005",
  walletName: "Momo",
  walletAccount: "0762 577 921",
  qrCodeUrl: "https://img.vietqr.io/image/TCB-5712052005-qr_only.png",
};