/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

// import { TransactionItemProps } from '@/customer/transactions/components/transactions';
// import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
};

export type RootStackParamList = {
    // BottomTabs: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    Home: undefined;
    AppLandingScreen: undefined;
    InviteAndEarnScreen: undefined;
    SupportScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>;

// export type RootTabParamList = {
//     HomeLanding: undefined;
//     ProfileLanding: undefined;
//     TransactionsLanding: undefined;
//     TransferLanding: undefined;
//     TabOne: undefined;
//     TabTwo: undefined;
// };

// export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
//     BottomTabScreenProps<RootTabParamList, Screen>,
//     NativeStackScreenProps<RootStackParamList>
// >;
