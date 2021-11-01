import { IconDefinition, IconName } from '@fortawesome/free-solid-svg-icons';

const prefix = 'fas';
const iconName = 'trash-eye' as IconName;
const width = 496;
const height = 512;
const ligatures: string[] = [];
const unicode = 'xxxx';
const svgPathData = 'M 164.52344 6.0371094 C 157.47219 6.0095224 151.02574 10.015318 147.92773 16.349609 L 140.63867 30.851562 L 47.582031 30.851562 C 40.729015 30.85119 35.173455 36.40675 35.173828 43.259766 L 35.173828 68.074219 C 35.173456 74.927234 40.729016 80.482794 47.582031 80.482422 L 370.17773 80.482422 C 377.03075 80.482798 382.58631 74.927237 382.58594 68.074219 L 382.58594 43.259766 C 382.58631 36.406747 377.03075 30.851186 370.17773 30.851562 L 277.12109 30.851562 L 269.83203 16.349609 C 266.68185 10.026076 260.22295 6.0313444 253.1582 6.0371094 L 164.52344 6.0371094 z M 59.990234 105.29688 L 76.429688 368.18164 C 77.65779 387.79543 93.922013 403.07535 113.57422 403.07812 L 132.10352 403.07812 C 128.01685 396.81586 124.14271 390.4131 120.73047 383.75977 C 113.86966 369.77617 113.1438 352.7516 119.42773 338.42773 C 132.55871 310.93668 152.17959 286.64784 175.95703 267.63867 C 209.99173 240.15247 253.45345 224.66054 297.18555 224.24609 C 314.96087 224.08949 332.73912 226.42657 349.9082 231.0293 L 357.76953 105.29688 L 59.990234 105.29688 z M 299.08984 262.22852 C 236.76475 262.22852 182.31906 298.54881 154.83984 352.17383 C 152.48788 356.82643 152.48788 362.32007 154.83984 366.97266 C 182.33427 420.61797 236.76475 456.91406 299.08984 456.91406 C 361.41491 456.91406 415.86062 420.59377 443.33984 366.96875 C 445.69246 362.31562 445.69246 356.8211 443.33984 352.16797 C 415.84541 298.52267 361.41491 262.22852 299.08984 262.22852 z M 299.08984 286.56445 C 339.41025 286.56427 372.09676 319.2499 372.09766 359.57031 C 372.11746 399.89961 339.41914 432.59792 299.08984 432.57812 C 258.64769 432.75049 225.77148 400.0128 225.77148 359.57031 C 225.77148 319.12783 258.64769 286.39209 299.08984 286.56445 z M 298.88867 318.41211 C 276.32069 318.41255 258.02583 336.70741 258.02539 359.27539 C 258.02475 381.84414 276.31992 400.14019 298.88867 400.14062 C 321.45818 400.14126 339.75455 381.8449 339.75391 359.27539 C 339.75347 336.70664 321.45742 318.41147 298.88867 318.41211 z';

export const trashEye: IconDefinition =
{
    prefix: prefix,
    iconName: iconName,
    icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
    ]
};