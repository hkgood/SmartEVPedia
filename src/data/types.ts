export type HardwarePlatform = {
  name: string;
  generation: string;
  releaseDate: string;
  cockpitChip: string;
  adChip: string;
  sensors: string[];
  models: string[];
};

export type SoftwareVersion = {
  version: string;
  date: string;
  type: 'OS' | '智驾';
  description?: string;
  features: string[];
  supportedPlatforms: string[];
  detailsUrl?: string;
};

export type ChipPlatform = {
  id: string;
  name: string;
  manufacturer: string;
  type: '智驾芯片' | '座舱芯片';
  specs: string;
  releaseDate: string;
  toiPS: string;
  process: string;
  features: string[];
  usedBy: string[];
};

export type Brand = {
  id: string;
  name: string;
  englishName: string;
  description: string;
  officialLink: string;
  logoUrl: string;
  color: string;
  hardwarePlatforms: HardwarePlatform[];
  softwareHistory: SoftwareVersion[];
};
