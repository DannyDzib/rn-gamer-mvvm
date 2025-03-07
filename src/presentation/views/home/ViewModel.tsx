import { type ILogoutUseCase } from '@src/application/useCases/auth/types';
import { useLoading } from '@presentation/components/Loading/LoadingContext';

interface Props {
    LogoutUseCase: ILogoutUseCase;
}

const HomeViewModel = ({ LogoutUseCase }: Props) => {
    const { showLoading, hideLoading } = useLoading();

    const onLogout = async () => {
        showLoading();
        await LogoutUseCase.run();
        hideLoading();
    };

    return { onLogout };
};

export default HomeViewModel;
