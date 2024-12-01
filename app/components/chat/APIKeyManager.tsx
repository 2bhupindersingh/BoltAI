import type { ProviderInfo } from '~/types/model';

interface Props {
  provider?: ProviderInfo;
  apiKey?: string;
  onSave?: (key: string) => void;
}

const ApiKeyManager = ({ provider }: Props) => {
  return (
    <div className="flex items-start sm:items-center mt-2 mb-2 flex-col sm:flex-row">
      {provider?.getApiKeyLink && <></>}
    </div>
  );
};

export { ApiKeyManager };
