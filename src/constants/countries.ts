type Country = {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  regularImageURL: string;
  twemojiImageURL: string;
};

const BASE: Omit<Country, 'regularImageURL' | 'twemojiImageURL'>[] = [
  {
    name: 'Ascension Island',
    code: 'AC',
    emoji: '🇦🇨',
    unicode: 'U+1F1E6 U+1F1E8',
  },
  {
    name: 'Andorra',
    code: 'AD',
    emoji: '🇦🇩',
    unicode: 'U+1F1E6 U+1F1E9',
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    emoji: '🇦🇪',
    unicode: 'U+1F1E6 U+1F1EA',
  },
  {
    name: 'Afghanistan',
    code: 'AF',
    emoji: '🇦🇫',
    unicode: 'U+1F1E6 U+1F1EB',
  },
  {
    name: 'Antigua & Barbuda',
    code: 'AG',
    emoji: '🇦🇬',
    unicode: 'U+1F1E6 U+1F1EC',
  },
  {
    name: 'Anguilla',
    code: 'AI',
    emoji: '🇦🇮',
    unicode: 'U+1F1E6 U+1F1EE',
  },
  {
    name: 'Albania',
    code: 'AL',
    emoji: '🇦🇱',
    unicode: 'U+1F1E6 U+1F1F1',
  },
  {
    name: 'Armenia',
    code: 'AM',
    emoji: '🇦🇲',
    unicode: 'U+1F1E6 U+1F1F2',
  },
  {
    name: 'Angola',
    code: 'AO',
    emoji: '🇦🇴',
    unicode: 'U+1F1E6 U+1F1F4',
  },
  {
    name: 'Antarctica',
    code: 'AQ',
    emoji: '🇦🇶',
    unicode: 'U+1F1E6 U+1F1F6',
  },
  {
    name: 'Argentina',
    code: 'AR',
    emoji: '🇦🇷',
    unicode: 'U+1F1E6 U+1F1F7',
  },
  {
    name: 'American Samoa',
    code: 'AS',
    emoji: '🇦🇸',
    unicode: 'U+1F1E6 U+1F1F8',
  },
  {
    name: 'Austria',
    code: 'AT',
    emoji: '🇦🇹',
    unicode: 'U+1F1E6 U+1F1F9',
  },
  {
    name: 'Australia',
    code: 'AU',
    emoji: '🇦🇺',
    unicode: 'U+1F1E6 U+1F1FA',
  },
  {
    name: 'Aruba',
    code: 'AW',
    emoji: '🇦🇼',
    unicode: 'U+1F1E6 U+1F1FC',
  },
  {
    name: 'Åland Islands',
    code: 'AX',
    emoji: '🇦🇽',
    unicode: 'U+1F1E6 U+1F1FD',
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
    emoji: '🇦🇿',
    unicode: 'U+1F1E6 U+1F1FF',
  },
  {
    name: 'Bosnia & Herzegovina',
    code: 'BA',
    emoji: '🇧🇦',
    unicode: 'U+1F1E7 U+1F1E6',
  },
  {
    name: 'Barbados',
    code: 'BB',
    emoji: '🇧🇧',
    unicode: 'U+1F1E7 U+1F1E7',
  },
  {
    name: 'Bangladesh',
    code: 'BD',
    emoji: '🇧🇩',
    unicode: 'U+1F1E7 U+1F1E9',
  },
  {
    name: 'Belgium',
    code: 'BE',
    emoji: '🇧🇪',
    unicode: 'U+1F1E7 U+1F1EA',
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
    emoji: '🇧🇫',
    unicode: 'U+1F1E7 U+1F1EB',
  },
  {
    name: 'Bulgaria',
    code: 'BG',
    emoji: '🇧🇬',
    unicode: 'U+1F1E7 U+1F1EC',
  },
  {
    name: 'Bahrain',
    code: 'BH',
    emoji: '🇧🇭',
    unicode: 'U+1F1E7 U+1F1ED',
  },
  {
    name: 'Burundi',
    code: 'BI',
    emoji: '🇧🇮',
    unicode: 'U+1F1E7 U+1F1EE',
  },
  {
    name: 'Benin',
    code: 'BJ',
    emoji: '🇧🇯',
    unicode: 'U+1F1E7 U+1F1EF',
  },
  {
    name: 'St. Barthélemy',
    code: 'BL',
    emoji: '🇧🇱',
    unicode: 'U+1F1E7 U+1F1F1',
  },
  {
    name: 'Bermuda',
    code: 'BM',
    emoji: '🇧🇲',
    unicode: 'U+1F1E7 U+1F1F2',
  },
  {
    name: 'Brunei',
    code: 'BN',
    emoji: '🇧🇳',
    unicode: 'U+1F1E7 U+1F1F3',
  },
  {
    name: 'Bolivia',
    code: 'BO',
    emoji: '🇧🇴',
    unicode: 'U+1F1E7 U+1F1F4',
  },
  {
    name: 'Caribbean Netherlands',
    code: 'BQ',
    emoji: '🇧🇶',
    unicode: 'U+1F1E7 U+1F1F6',
  },
  {
    name: 'Brazil',
    code: 'BR',
    emoji: '🇧🇷',
    unicode: 'U+1F1E7 U+1F1F7',
  },
  {
    name: 'Bahamas',
    code: 'BS',
    emoji: '🇧🇸',
    unicode: 'U+1F1E7 U+1F1F8',
  },
  {
    name: 'Bhutan',
    code: 'BT',
    emoji: '🇧🇹',
    unicode: 'U+1F1E7 U+1F1F9',
  },
  {
    name: 'Bouvet Island',
    code: 'BV',
    emoji: '🇧🇻',
    unicode: 'U+1F1E7 U+1F1FB',
  },
  {
    name: 'Botswana',
    code: 'BW',
    emoji: '🇧🇼',
    unicode: 'U+1F1E7 U+1F1FC',
  },
  {
    name: 'Belarus',
    code: 'BY',
    emoji: '🇧🇾',
    unicode: 'U+1F1E7 U+1F1FE',
  },
  {
    name: 'Belize',
    code: 'BZ',
    emoji: '🇧🇿',
    unicode: 'U+1F1E7 U+1F1FF',
  },
  {
    name: 'Canada',
    code: 'CA',
    emoji: '🇨🇦',
    unicode: 'U+1F1E8 U+1F1E6',
  },
  {
    name: 'Cocos (Keeling) Islands',
    code: 'CC',
    emoji: '🇨🇨',
    unicode: 'U+1F1E8 U+1F1E8',
  },
  {
    name: 'Congo - Kinshasa',
    code: 'CD',
    emoji: '🇨🇩',
    unicode: 'U+1F1E8 U+1F1E9',
  },
  {
    name: 'Central African Republic',
    code: 'CF',
    emoji: '🇨🇫',
    unicode: 'U+1F1E8 U+1F1EB',
  },
  {
    name: 'Congo - Brazzaville',
    code: 'CG',
    emoji: '🇨🇬',
    unicode: 'U+1F1E8 U+1F1EC',
  },
  {
    name: 'Switzerland',
    code: 'CH',
    emoji: '🇨🇭',
    unicode: 'U+1F1E8 U+1F1ED',
  },
  {
    name: "Côte d'Ivoire",
    code: 'CI',
    emoji: '🇨🇮',
    unicode: 'U+1F1E8 U+1F1EE',
  },
  {
    name: 'Cook Islands',
    code: 'CK',
    emoji: '🇨🇰',
    unicode: 'U+1F1E8 U+1F1F0',
  },
  {
    name: 'Chile',
    code: 'CL',
    emoji: '🇨🇱',
    unicode: 'U+1F1E8 U+1F1F1',
  },
  {
    name: 'Cameroon',
    code: 'CM',
    emoji: '🇨🇲',
    unicode: 'U+1F1E8 U+1F1F2',
  },
  {
    name: 'China',
    code: 'CN',
    emoji: '🇨🇳',
    unicode: 'U+1F1E8 U+1F1F3',
  },
  {
    name: 'Colombia',
    code: 'CO',
    emoji: '🇨🇴',
    unicode: 'U+1F1E8 U+1F1F4',
  },
  {
    name: 'Clipperton Island',
    code: 'CP',
    emoji: '🇨🇵',
    unicode: 'U+1F1E8 U+1F1F5',
  },
  {
    name: 'Costa Rica',
    code: 'CR',
    emoji: '🇨🇷',
    unicode: 'U+1F1E8 U+1F1F7',
  },
  {
    name: 'Cuba',
    code: 'CU',
    emoji: '🇨🇺',
    unicode: 'U+1F1E8 U+1F1FA',
  },
  {
    name: 'Cape Verde',
    code: 'CV',
    emoji: '🇨🇻',
    unicode: 'U+1F1E8 U+1F1FB',
  },
  {
    name: 'Curaçao',
    code: 'CW',
    emoji: '🇨🇼',
    unicode: 'U+1F1E8 U+1F1FC',
  },
  {
    name: 'Christmas Island',
    code: 'CX',
    emoji: '🇨🇽',
    unicode: 'U+1F1E8 U+1F1FD',
  },
  {
    name: 'Cyprus',
    code: 'CY',
    emoji: '🇨🇾',
    unicode: 'U+1F1E8 U+1F1FE',
  },
  {
    name: 'Czechia',
    code: 'CZ',
    emoji: '🇨🇿',
    unicode: 'U+1F1E8 U+1F1FF',
  },
  {
    name: 'Germany',
    code: 'DE',
    emoji: '🇩🇪',
    unicode: 'U+1F1E9 U+1F1EA',
  },
  {
    name: 'Diego Garcia',
    code: 'DG',
    emoji: '🇩🇬',
    unicode: 'U+1F1E9 U+1F1EC',
  },
  {
    name: 'Djibouti',
    code: 'DJ',
    emoji: '🇩🇯',
    unicode: 'U+1F1E9 U+1F1EF',
  },
  {
    name: 'Denmark',
    code: 'DK',
    emoji: '🇩🇰',
    unicode: 'U+1F1E9 U+1F1F0',
  },
  {
    name: 'Dominica',
    code: 'DM',
    emoji: '🇩🇲',
    unicode: 'U+1F1E9 U+1F1F2',
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
    emoji: '🇩🇴',
    unicode: 'U+1F1E9 U+1F1F4',
  },
  {
    name: 'Algeria',
    code: 'DZ',
    emoji: '🇩🇿',
    unicode: 'U+1F1E9 U+1F1FF',
  },
  {
    name: 'Ceuta & Melilla',
    code: 'EA',
    emoji: '🇪🇦',
    unicode: 'U+1F1EA U+1F1E6',
  },
  {
    name: 'Ecuador',
    code: 'EC',
    emoji: '🇪🇨',
    unicode: 'U+1F1EA U+1F1E8',
  },
  {
    name: 'Estonia',
    code: 'EE',
    emoji: '🇪🇪',
    unicode: 'U+1F1EA U+1F1EA',
  },
  {
    name: 'Egypt',
    code: 'EG',
    emoji: '🇪🇬',
    unicode: 'U+1F1EA U+1F1EC',
  },
  {
    name: 'Western Sahara',
    code: 'EH',
    emoji: '🇪🇭',
    unicode: 'U+1F1EA U+1F1ED',
  },
  {
    name: 'Eritrea',
    code: 'ER',
    emoji: '🇪🇷',
    unicode: 'U+1F1EA U+1F1F7',
  },
  {
    name: 'Spain',
    code: 'ES',
    emoji: '🇪🇸',
    unicode: 'U+1F1EA U+1F1F8',
  },
  {
    name: 'Ethiopia',
    code: 'ET',
    emoji: '🇪🇹',
    unicode: 'U+1F1EA U+1F1F9',
  },
  {
    name: 'European Union',
    code: 'EU',
    emoji: '🇪🇺',
    unicode: 'U+1F1EA U+1F1FA',
  },
  {
    name: 'Finland',
    code: 'FI',
    emoji: '🇫🇮',
    unicode: 'U+1F1EB U+1F1EE',
  },
  {
    name: 'Fiji',
    code: 'FJ',
    emoji: '🇫🇯',
    unicode: 'U+1F1EB U+1F1EF',
  },
  {
    name: 'Falkland Islands',
    code: 'FK',
    emoji: '🇫🇰',
    unicode: 'U+1F1EB U+1F1F0',
  },
  {
    name: 'Micronesia',
    code: 'FM',
    emoji: '🇫🇲',
    unicode: 'U+1F1EB U+1F1F2',
  },
  {
    name: 'Faroe Islands',
    code: 'FO',
    emoji: '🇫🇴',
    unicode: 'U+1F1EB U+1F1F4',
  },
  {
    name: 'France',
    code: 'FR',
    emoji: '🇫🇷',
    unicode: 'U+1F1EB U+1F1F7',
  },
  {
    name: 'Gabon',
    code: 'GA',
    emoji: '🇬🇦',
    unicode: 'U+1F1EC U+1F1E6',
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    emoji: '🇬🇧',
    unicode: 'U+1F1EC U+1F1E7',
  },
  {
    name: 'Grenada',
    code: 'GD',
    emoji: '🇬🇩',
    unicode: 'U+1F1EC U+1F1E9',
  },
  {
    name: 'Georgia',
    code: 'GE',
    emoji: '🇬🇪',
    unicode: 'U+1F1EC U+1F1EA',
  },
  {
    name: 'French Guiana',
    code: 'GF',
    emoji: '🇬🇫',
    unicode: 'U+1F1EC U+1F1EB',
  },
  {
    name: 'Guernsey',
    code: 'GG',
    emoji: '🇬🇬',
    unicode: 'U+1F1EC U+1F1EC',
  },
  {
    name: 'Ghana',
    code: 'GH',
    emoji: '🇬🇭',
    unicode: 'U+1F1EC U+1F1ED',
  },
  {
    name: 'Gibraltar',
    code: 'GI',
    emoji: '🇬🇮',
    unicode: 'U+1F1EC U+1F1EE',
  },
  {
    name: 'Greenland',
    code: 'GL',
    emoji: '🇬🇱',
    unicode: 'U+1F1EC U+1F1F1',
  },
  {
    name: 'Gambia',
    code: 'GM',
    emoji: '🇬🇲',
    unicode: 'U+1F1EC U+1F1F2',
  },
  {
    name: 'Guinea',
    code: 'GN',
    emoji: '🇬🇳',
    unicode: 'U+1F1EC U+1F1F3',
  },
  {
    name: 'Guadeloupe',
    code: 'GP',
    emoji: '🇬🇵',
    unicode: 'U+1F1EC U+1F1F5',
  },
  {
    name: 'Equatorial Guinea',
    code: 'GQ',
    emoji: '🇬🇶',
    unicode: 'U+1F1EC U+1F1F6',
  },
  {
    name: 'Greece',
    code: 'GR',
    emoji: '🇬🇷',
    unicode: 'U+1F1EC U+1F1F7',
  },
  {
    name: 'South Georgia & South Sandwich Islands',
    code: 'GS',
    emoji: '🇬🇸',
    unicode: 'U+1F1EC U+1F1F8',
  },
  {
    name: 'Guatemala',
    code: 'GT',
    emoji: '🇬🇹',
    unicode: 'U+1F1EC U+1F1F9',
  },
  {
    name: 'Guam',
    code: 'GU',
    emoji: '🇬🇺',
    unicode: 'U+1F1EC U+1F1FA',
  },
  {
    name: 'Guinea-Bissau',
    code: 'GW',
    emoji: '🇬🇼',
    unicode: 'U+1F1EC U+1F1FC',
  },
  {
    name: 'Guyana',
    code: 'GY',
    emoji: '🇬🇾',
    unicode: 'U+1F1EC U+1F1FE',
  },
  {
    name: 'Hong Kong SAR China',
    code: 'HK',
    emoji: '🇭🇰',
    unicode: 'U+1F1ED U+1F1F0',
  },
  {
    name: 'Heard & McDonald Islands',
    code: 'HM',
    emoji: '🇭🇲',
    unicode: 'U+1F1ED U+1F1F2',
  },
  {
    name: 'Honduras',
    code: 'HN',
    emoji: '🇭🇳',
    unicode: 'U+1F1ED U+1F1F3',
  },
  {
    name: 'Croatia',
    code: 'HR',
    emoji: '🇭🇷',
    unicode: 'U+1F1ED U+1F1F7',
  },
  {
    name: 'Haiti',
    code: 'HT',
    emoji: '🇭🇹',
    unicode: 'U+1F1ED U+1F1F9',
  },
  {
    name: 'Hungary',
    code: 'HU',
    emoji: '🇭🇺',
    unicode: 'U+1F1ED U+1F1FA',
  },
  {
    name: 'Canary Islands',
    code: 'IC',
    emoji: '🇮🇨',
    unicode: 'U+1F1EE U+1F1E8',
  },
  {
    name: 'Indonesia',
    code: 'ID',
    emoji: '🇮🇩',
    unicode: 'U+1F1EE U+1F1E9',
  },
  {
    name: 'Ireland',
    code: 'IE',
    emoji: '🇮🇪',
    unicode: 'U+1F1EE U+1F1EA',
  },
  {
    name: 'Israel',
    code: 'IL',
    emoji: '🇮🇱',
    unicode: 'U+1F1EE U+1F1F1',
  },
  {
    name: 'Isle of Man',
    code: 'IM',
    emoji: '🇮🇲',
    unicode: 'U+1F1EE U+1F1F2',
  },
  {
    name: 'India',
    code: 'IN',
    emoji: '🇮🇳',
    unicode: 'U+1F1EE U+1F1F3',
  },
  {
    name: 'British Indian Ocean Territory',
    code: 'IO',
    emoji: '🇮🇴',
    unicode: 'U+1F1EE U+1F1F4',
  },
  {
    name: 'Iraq',
    code: 'IQ',
    emoji: '🇮🇶',
    unicode: 'U+1F1EE U+1F1F6',
  },
  {
    name: 'Iran',
    code: 'IR',
    emoji: '🇮🇷',
    unicode: 'U+1F1EE U+1F1F7',
  },
  {
    name: 'Iceland',
    code: 'IS',
    emoji: '🇮🇸',
    unicode: 'U+1F1EE U+1F1F8',
  },
  {
    name: 'Italy',
    code: 'IT',
    emoji: '🇮🇹',
    unicode: 'U+1F1EE U+1F1F9',
  },
  {
    name: 'Jersey',
    code: 'JE',
    emoji: '🇯🇪',
    unicode: 'U+1F1EF U+1F1EA',
  },
  {
    name: 'Jamaica',
    code: 'JM',
    emoji: '🇯🇲',
    unicode: 'U+1F1EF U+1F1F2',
  },
  {
    name: 'Jordan',
    code: 'JO',
    emoji: '🇯🇴',
    unicode: 'U+1F1EF U+1F1F4',
  },
  {
    name: 'Japan',
    code: 'JP',
    emoji: '🇯🇵',
    unicode: 'U+1F1EF U+1F1F5',
  },
  {
    name: 'Kenya',
    code: 'KE',
    emoji: '🇰🇪',
    unicode: 'U+1F1F0 U+1F1EA',
  },
  {
    name: 'Kyrgyzstan',
    code: 'KG',
    emoji: '🇰🇬',
    unicode: 'U+1F1F0 U+1F1EC',
  },
  {
    name: 'Cambodia',
    code: 'KH',
    emoji: '🇰🇭',
    unicode: 'U+1F1F0 U+1F1ED',
  },
  {
    name: 'Kiribati',
    code: 'KI',
    emoji: '🇰🇮',
    unicode: 'U+1F1F0 U+1F1EE',
  },
  {
    name: 'Comoros',
    code: 'KM',
    emoji: '🇰🇲',
    unicode: 'U+1F1F0 U+1F1F2',
  },
  {
    name: 'St. Kitts & Nevis',
    code: 'KN',
    emoji: '🇰🇳',
    unicode: 'U+1F1F0 U+1F1F3',
  },
  {
    name: 'North Korea',
    code: 'KP',
    emoji: '🇰🇵',
    unicode: 'U+1F1F0 U+1F1F5',
  },
  {
    name: 'South Korea',
    code: 'KR',
    emoji: '🇰🇷',
    unicode: 'U+1F1F0 U+1F1F7',
  },
  {
    name: 'Kuwait',
    code: 'KW',
    emoji: '🇰🇼',
    unicode: 'U+1F1F0 U+1F1FC',
  },
  {
    name: 'Cayman Islands',
    code: 'KY',
    emoji: '🇰🇾',
    unicode: 'U+1F1F0 U+1F1FE',
  },
  {
    name: 'Kazakhstan',
    code: 'KZ',
    emoji: '🇰🇿',
    unicode: 'U+1F1F0 U+1F1FF',
  },
  {
    name: 'Laos',
    code: 'LA',
    emoji: '🇱🇦',
    unicode: 'U+1F1F1 U+1F1E6',
  },
  {
    name: 'Lebanon',
    code: 'LB',
    emoji: '🇱🇧',
    unicode: 'U+1F1F1 U+1F1E7',
  },
  {
    name: 'St. Lucia',
    code: 'LC',
    emoji: '🇱🇨',
    unicode: 'U+1F1F1 U+1F1E8',
  },
  {
    name: 'Liechtenstein',
    code: 'LI',
    emoji: '🇱🇮',
    unicode: 'U+1F1F1 U+1F1EE',
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
    emoji: '🇱🇰',
    unicode: 'U+1F1F1 U+1F1F0',
  },
  {
    name: 'Liberia',
    code: 'LR',
    emoji: '🇱🇷',
    unicode: 'U+1F1F1 U+1F1F7',
  },
  {
    name: 'Lesotho',
    code: 'LS',
    emoji: '🇱🇸',
    unicode: 'U+1F1F1 U+1F1F8',
  },
  {
    name: 'Lithuania',
    code: 'LT',
    emoji: '🇱🇹',
    unicode: 'U+1F1F1 U+1F1F9',
  },
  {
    name: 'Luxembourg',
    code: 'LU',
    emoji: '🇱🇺',
    unicode: 'U+1F1F1 U+1F1FA',
  },
  {
    name: 'Latvia',
    code: 'LV',
    emoji: '🇱🇻',
    unicode: 'U+1F1F1 U+1F1FB',
  },
  {
    name: 'Libya',
    code: 'LY',
    emoji: '🇱🇾',
    unicode: 'U+1F1F1 U+1F1FE',
  },
  {
    name: 'Morocco',
    code: 'MA',
    emoji: '🇲🇦',
    unicode: 'U+1F1F2 U+1F1E6',
  },
  {
    name: 'Monaco',
    code: 'MC',
    emoji: '🇲🇨',
    unicode: 'U+1F1F2 U+1F1E8',
  },
  {
    name: 'Moldova',
    code: 'MD',
    emoji: '🇲🇩',
    unicode: 'U+1F1F2 U+1F1E9',
  },
  {
    name: 'Montenegro',
    code: 'ME',
    emoji: '🇲🇪',
    unicode: 'U+1F1F2 U+1F1EA',
  },
  {
    name: 'St. Martin',
    code: 'MF',
    emoji: '🇲🇫',
    unicode: 'U+1F1F2 U+1F1EB',
  },
  {
    name: 'Madagascar',
    code: 'MG',
    emoji: '🇲🇬',
    unicode: 'U+1F1F2 U+1F1EC',
  },
  {
    name: 'Marshall Islands',
    code: 'MH',
    emoji: '🇲🇭',
    unicode: 'U+1F1F2 U+1F1ED',
  },
  {
    name: 'North Macedonia',
    code: 'MK',
    emoji: '🇲🇰',
    unicode: 'U+1F1F2 U+1F1F0',
  },
  {
    name: 'Mali',
    code: 'ML',
    emoji: '🇲🇱',
    unicode: 'U+1F1F2 U+1F1F1',
  },
  {
    name: 'Myanmar (Burma)',
    code: 'MM',
    emoji: '🇲🇲',
    unicode: 'U+1F1F2 U+1F1F2',
  },
  {
    name: 'Mongolia',
    code: 'MN',
    emoji: '🇲🇳',
    unicode: 'U+1F1F2 U+1F1F3',
  },
  {
    name: 'Macao SAR China',
    code: 'MO',
    emoji: '🇲🇴',
    unicode: 'U+1F1F2 U+1F1F4',
  },
  {
    name: 'Northern Mariana Islands',
    code: 'MP',
    emoji: '🇲🇵',
    unicode: 'U+1F1F2 U+1F1F5',
  },
  {
    name: 'Martinique',
    code: 'MQ',
    emoji: '🇲🇶',
    unicode: 'U+1F1F2 U+1F1F6',
  },
  {
    name: 'Mauritania',
    code: 'MR',
    emoji: '🇲🇷',
    unicode: 'U+1F1F2 U+1F1F7',
  },
  {
    name: 'Montserrat',
    code: 'MS',
    emoji: '🇲🇸',
    unicode: 'U+1F1F2 U+1F1F8',
  },
  {
    name: 'Malta',
    code: 'MT',
    emoji: '🇲🇹',
    unicode: 'U+1F1F2 U+1F1F9',
  },
  {
    name: 'Mauritius',
    code: 'MU',
    emoji: '🇲🇺',
    unicode: 'U+1F1F2 U+1F1FA',
  },
  {
    name: 'Maldives',
    code: 'MV',
    emoji: '🇲🇻',
    unicode: 'U+1F1F2 U+1F1FB',
  },
  {
    name: 'Malawi',
    code: 'MW',
    emoji: '🇲🇼',
    unicode: 'U+1F1F2 U+1F1FC',
  },
  {
    name: 'Mexico',
    code: 'MX',
    emoji: '🇲🇽',
    unicode: 'U+1F1F2 U+1F1FD',
  },
  {
    name: 'Malaysia',
    code: 'MY',
    emoji: '🇲🇾',
    unicode: 'U+1F1F2 U+1F1FE',
  },
  {
    name: 'Mozambique',
    code: 'MZ',
    emoji: '🇲🇿',
    unicode: 'U+1F1F2 U+1F1FF',
  },
  {
    name: 'Namibia',
    code: 'NA',
    emoji: '🇳🇦',
    unicode: 'U+1F1F3 U+1F1E6',
  },
  {
    name: 'New Caledonia',
    code: 'NC',
    emoji: '🇳🇨',
    unicode: 'U+1F1F3 U+1F1E8',
  },
  {
    name: 'Niger',
    code: 'NE',
    emoji: '🇳🇪',
    unicode: 'U+1F1F3 U+1F1EA',
  },
  {
    name: 'Norfolk Island',
    code: 'NF',
    emoji: '🇳🇫',
    unicode: 'U+1F1F3 U+1F1EB',
  },
  {
    name: 'Nigeria',
    code: 'NG',
    emoji: '🇳🇬',
    unicode: 'U+1F1F3 U+1F1EC',
  },
  {
    name: 'Nicaragua',
    code: 'NI',
    emoji: '🇳🇮',
    unicode: 'U+1F1F3 U+1F1EE',
  },
  {
    name: 'Netherlands',
    code: 'NL',
    emoji: '🇳🇱',
    unicode: 'U+1F1F3 U+1F1F1',
  },
  {
    name: 'Norway',
    code: 'NO',
    emoji: '🇳🇴',
    unicode: 'U+1F1F3 U+1F1F4',
  },
  {
    name: 'Nepal',
    code: 'NP',
    emoji: '🇳🇵',
    unicode: 'U+1F1F3 U+1F1F5',
  },
  {
    name: 'Nauru',
    code: 'NR',
    emoji: '🇳🇷',
    unicode: 'U+1F1F3 U+1F1F7',
  },
  {
    name: 'Niue',
    code: 'NU',
    emoji: '🇳🇺',
    unicode: 'U+1F1F3 U+1F1FA',
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    emoji: '🇳🇿',
    unicode: 'U+1F1F3 U+1F1FF',
  },
  {
    name: 'Oman',
    code: 'OM',
    emoji: '🇴🇲',
    unicode: 'U+1F1F4 U+1F1F2',
  },
  {
    name: 'Panama',
    code: 'PA',
    emoji: '🇵🇦',
    unicode: 'U+1F1F5 U+1F1E6',
  },
  {
    name: 'Peru',
    code: 'PE',
    emoji: '🇵🇪',
    unicode: 'U+1F1F5 U+1F1EA',
  },
  {
    name: 'French Polynesia',
    code: 'PF',
    emoji: '🇵🇫',
    unicode: 'U+1F1F5 U+1F1EB',
  },
  {
    name: 'Papua New Guinea',
    code: 'PG',
    emoji: '🇵🇬',
    unicode: 'U+1F1F5 U+1F1EC',
  },
  {
    name: 'Philippines',
    code: 'PH',
    emoji: '🇵🇭',
    unicode: 'U+1F1F5 U+1F1ED',
  },
  {
    name: 'Pakistan',
    code: 'PK',
    emoji: '🇵🇰',
    unicode: 'U+1F1F5 U+1F1F0',
  },
  {
    name: 'Poland',
    code: 'PL',
    emoji: '🇵🇱',
    unicode: 'U+1F1F5 U+1F1F1',
  },
  {
    name: 'St. Pierre & Miquelon',
    code: 'PM',
    emoji: '🇵🇲',
    unicode: 'U+1F1F5 U+1F1F2',
  },
  {
    name: 'Pitcairn Islands',
    code: 'PN',
    emoji: '🇵🇳',
    unicode: 'U+1F1F5 U+1F1F3',
  },
  {
    name: 'Puerto Rico',
    code: 'PR',
    emoji: '🇵🇷',
    unicode: 'U+1F1F5 U+1F1F7',
  },
  {
    name: 'Palestinian Territories',
    code: 'PS',
    emoji: '🇵🇸',
    unicode: 'U+1F1F5 U+1F1F8',
  },
  {
    name: 'Portugal',
    code: 'PT',
    emoji: '🇵🇹',
    unicode: 'U+1F1F5 U+1F1F9',
  },
  {
    name: 'Palau',
    code: 'PW',
    emoji: '🇵🇼',
    unicode: 'U+1F1F5 U+1F1FC',
  },
  {
    name: 'Paraguay',
    code: 'PY',
    emoji: '🇵🇾',
    unicode: 'U+1F1F5 U+1F1FE',
  },
  {
    name: 'Qatar',
    code: 'QA',
    emoji: '🇶🇦',
    unicode: 'U+1F1F6 U+1F1E6',
  },
  {
    name: 'Réunion',
    code: 'RE',
    emoji: '🇷🇪',
    unicode: 'U+1F1F7 U+1F1EA',
  },
  {
    name: 'Romania',
    code: 'RO',
    emoji: '🇷🇴',
    unicode: 'U+1F1F7 U+1F1F4',
  },
  {
    name: 'Serbia',
    code: 'RS',
    emoji: '🇷🇸',
    unicode: 'U+1F1F7 U+1F1F8',
  },
  {
    name: 'Russia',
    code: 'RU',
    emoji: '🇷🇺',
    unicode: 'U+1F1F7 U+1F1FA',
  },
  {
    name: 'Rwanda',
    code: 'RW',
    emoji: '🇷🇼',
    unicode: 'U+1F1F7 U+1F1FC',
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    emoji: '🇸🇦',
    unicode: 'U+1F1F8 U+1F1E6',
  },
  {
    name: 'Solomon Islands',
    code: 'SB',
    emoji: '🇸🇧',
    unicode: 'U+1F1F8 U+1F1E7',
  },
  {
    name: 'Seychelles',
    code: 'SC',
    emoji: '🇸🇨',
    unicode: 'U+1F1F8 U+1F1E8',
  },
  {
    name: 'Sudan',
    code: 'SD',
    emoji: '🇸🇩',
    unicode: 'U+1F1F8 U+1F1E9',
  },
  {
    name: 'Sweden',
    code: 'SE',
    emoji: '🇸🇪',
    unicode: 'U+1F1F8 U+1F1EA',
  },
  {
    name: 'Singapore',
    code: 'SG',
    emoji: '🇸🇬',
    unicode: 'U+1F1F8 U+1F1EC',
  },
  {
    name: 'St. Helena',
    code: 'SH',
    emoji: '🇸🇭',
    unicode: 'U+1F1F8 U+1F1ED',
  },
  {
    name: 'Slovenia',
    code: 'SI',
    emoji: '🇸🇮',
    unicode: 'U+1F1F8 U+1F1EE',
  },
  {
    name: 'Svalbard & Jan Mayen',
    code: 'SJ',
    emoji: '🇸🇯',
    unicode: 'U+1F1F8 U+1F1EF',
  },
  {
    name: 'Slovakia',
    code: 'SK',
    emoji: '🇸🇰',
    unicode: 'U+1F1F8 U+1F1F0',
  },
  {
    name: 'Sierra Leone',
    code: 'SL',
    emoji: '🇸🇱',
    unicode: 'U+1F1F8 U+1F1F1',
  },
  {
    name: 'San Marino',
    code: 'SM',
    emoji: '🇸🇲',
    unicode: 'U+1F1F8 U+1F1F2',
  },
  {
    name: 'Senegal',
    code: 'SN',
    emoji: '🇸🇳',
    unicode: 'U+1F1F8 U+1F1F3',
  },
  {
    name: 'Somalia',
    code: 'SO',
    emoji: '🇸🇴',
    unicode: 'U+1F1F8 U+1F1F4',
  },
  {
    name: 'Suriname',
    code: 'SR',
    emoji: '🇸🇷',
    unicode: 'U+1F1F8 U+1F1F7',
  },
  {
    name: 'South Sudan',
    code: 'SS',
    emoji: '🇸🇸',
    unicode: 'U+1F1F8 U+1F1F8',
  },
  {
    name: 'São Tomé & Príncipe',
    code: 'ST',
    emoji: '🇸🇹',
    unicode: 'U+1F1F8 U+1F1F9',
  },
  {
    name: 'El Salvador',
    code: 'SV',
    emoji: '🇸🇻',
    unicode: 'U+1F1F8 U+1F1FB',
  },
  {
    name: 'Sint Maarten',
    code: 'SX',
    emoji: '🇸🇽',
    unicode: 'U+1F1F8 U+1F1FD',
  },
  {
    name: 'Syria',
    code: 'SY',
    emoji: '🇸🇾',
    unicode: 'U+1F1F8 U+1F1FE',
  },
  {
    name: 'Eswatini',
    code: 'SZ',
    emoji: '🇸🇿',
    unicode: 'U+1F1F8 U+1F1FF',
  },
  {
    name: 'Tristan da Cunha',
    code: 'TA',
    emoji: '🇹🇦',
    unicode: 'U+1F1F9 U+1F1E6',
  },
  {
    name: 'Turks & Caicos Islands',
    code: 'TC',
    emoji: '🇹🇨',
    unicode: 'U+1F1F9 U+1F1E8',
  },
  {
    name: 'Chad',
    code: 'TD',
    emoji: '🇹🇩',
    unicode: 'U+1F1F9 U+1F1E9',
  },
  {
    name: 'French Southern Territories',
    code: 'TF',
    emoji: '🇹🇫',
    unicode: 'U+1F1F9 U+1F1EB',
  },
  {
    name: 'Togo',
    code: 'TG',
    emoji: '🇹🇬',
    unicode: 'U+1F1F9 U+1F1EC',
  },
  {
    name: 'Thailand',
    code: 'TH',
    emoji: '🇹🇭',
    unicode: 'U+1F1F9 U+1F1ED',
  },
  {
    name: 'Tajikistan',
    code: 'TJ',
    emoji: '🇹🇯',
    unicode: 'U+1F1F9 U+1F1EF',
  },
  {
    name: 'Tokelau',
    code: 'TK',
    emoji: '🇹🇰',
    unicode: 'U+1F1F9 U+1F1F0',
  },
  {
    name: 'Timor-Leste',
    code: 'TL',
    emoji: '🇹🇱',
    unicode: 'U+1F1F9 U+1F1F1',
  },
  {
    name: 'Turkmenistan',
    code: 'TM',
    emoji: '🇹🇲',
    unicode: 'U+1F1F9 U+1F1F2',
  },
  {
    name: 'Tunisia',
    code: 'TN',
    emoji: '🇹🇳',
    unicode: 'U+1F1F9 U+1F1F3',
  },
  {
    name: 'Tonga',
    code: 'TO',
    emoji: '🇹🇴',
    unicode: 'U+1F1F9 U+1F1F4',
  },
  {
    name: 'Turkey',
    code: 'TR',
    emoji: '🇹🇷',
    unicode: 'U+1F1F9 U+1F1F7',
  },
  {
    name: 'Trinidad & Tobago',
    code: 'TT',
    emoji: '🇹🇹',
    unicode: 'U+1F1F9 U+1F1F9',
  },
  {
    name: 'Tuvalu',
    code: 'TV',
    emoji: '🇹🇻',
    unicode: 'U+1F1F9 U+1F1FB',
  },
  {
    name: 'Taiwan',
    code: 'TW',
    emoji: '🇹🇼',
    unicode: 'U+1F1F9 U+1F1FC',
  },
  {
    name: 'Tanzania',
    code: 'TZ',
    emoji: '🇹🇿',
    unicode: 'U+1F1F9 U+1F1FF',
  },
  {
    name: 'Ukraine',
    code: 'UA',
    emoji: '🇺🇦',
    unicode: 'U+1F1FA U+1F1E6',
  },
  {
    name: 'Uganda',
    code: 'UG',
    emoji: '🇺🇬',
    unicode: 'U+1F1FA U+1F1EC',
  },
  {
    name: 'U.S. Outlying Islands',
    code: 'UM',
    emoji: '🇺🇲',
    unicode: 'U+1F1FA U+1F1F2',
  },
  {
    name: 'United Nations',
    code: 'UN',
    emoji: '🇺🇳',
    unicode: 'U+1F1FA U+1F1F3',
  },
  {
    name: 'United States',
    code: 'US',
    emoji: '🇺🇸',
    unicode: 'U+1F1FA U+1F1F8',
  },
  {
    name: 'Uruguay',
    code: 'UY',
    emoji: '🇺🇾',
    unicode: 'U+1F1FA U+1F1FE',
  },
  {
    name: 'Uzbekistan',
    code: 'UZ',
    emoji: '🇺🇿',
    unicode: 'U+1F1FA U+1F1FF',
  },
  {
    name: 'Vatican City',
    code: 'VA',
    emoji: '🇻🇦',
    unicode: 'U+1F1FB U+1F1E6',
  },
  {
    name: 'St. Vincent & Grenadines',
    code: 'VC',
    emoji: '🇻🇨',
    unicode: 'U+1F1FB U+1F1E8',
  },
  {
    name: 'Venezuela',
    code: 'VE',
    emoji: '🇻🇪',
    unicode: 'U+1F1FB U+1F1EA',
  },
  {
    name: 'British Virgin Islands',
    code: 'VG',
    emoji: '🇻🇬',
    unicode: 'U+1F1FB U+1F1EC',
  },
  {
    name: 'U.S. Virgin Islands',
    code: 'VI',
    emoji: '🇻🇮',
    unicode: 'U+1F1FB U+1F1EE',
  },
  {
    name: 'Vietnam',
    code: 'VN',
    emoji: '🇻🇳',
    unicode: 'U+1F1FB U+1F1F3',
  },
  {
    name: 'Vanuatu',
    code: 'VU',
    emoji: '🇻🇺',
    unicode: 'U+1F1FB U+1F1FA',
  },
  {
    name: 'Wallis & Futuna',
    code: 'WF',
    emoji: '🇼🇫',
    unicode: 'U+1F1FC U+1F1EB',
  },
  {
    name: 'Samoa',
    code: 'WS',
    emoji: '🇼🇸',
    unicode: 'U+1F1FC U+1F1F8',
  },
  {
    name: 'Kosovo',
    code: 'XK',
    emoji: '🇽🇰',
    unicode: 'U+1F1FD U+1F1F0',
  },
  {
    name: 'Yemen',
    code: 'YE',
    emoji: '🇾🇪',
    unicode: 'U+1F1FE U+1F1EA',
  },
  {
    name: 'Mayotte',
    code: 'YT',
    emoji: '🇾🇹',
    unicode: 'U+1F1FE U+1F1F9',
  },
  {
    name: 'South Africa',
    code: 'ZA',
    emoji: '🇿🇦',
    unicode: 'U+1F1FF U+1F1E6',
  },
  {
    name: 'Zambia',
    code: 'ZM',
    emoji: '🇿🇲',
    unicode: 'U+1F1FF U+1F1F2',
  },
  {
    name: 'Zimbabwe',
    code: 'ZW',
    emoji: '🇿🇼',
    unicode: 'U+1F1FF U+1F1FC',
  },
  {
    name: 'England',
    code: 'ENGLAND',
    emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    unicode: 'U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F',
  },
  {
    name: 'Scotland',
    code: 'SCOTLAND',
    emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    unicode: 'U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F',
  },
  {
    name: 'Wales',
    code: 'WALES',
    emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    unicode: 'U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F',
  },
];

export const COUNTRIES: Country[] = BASE.map((country) => {
  return {
    ...country,
    regularImageURL: `https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${country.code}.svg`,
    twemojiImageURL: `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${country.unicode
      .split(' ')
      .map((code) => code.replace('U+', '').toLowerCase())
      .join('-')}.svg`,
  };
});
