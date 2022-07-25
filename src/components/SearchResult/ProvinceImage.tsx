import { useColorMode } from "@chakra-ui/react";
import { ucfirst } from "utils";
import CityEffectSVG from "./CityEffectSVG";

interface ProvinceImageProps {
  province: string;
  isSmallViewport: boolean;
}

const ProvinceImage: React.FC<ProvinceImageProps> = ({
  province,
  isSmallViewport,
}) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <div
        style={{
          backgroundImage: `url('${
            process.env.PUBLIC_URL
          }/assets/provinsi/Logo Provinsi ${ucfirst(province)}.png') `,
          backgroundPosition: "50% 2vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100px 100px",
        }}
      >
        <CityEffectSVG
          width={isSmallViewport ? "400px" : "100%"}
          height={isSmallViewport ? "200px" : "100%"}
          color={colorMode}
        />
      </div>
    </>
  );
};

export default ProvinceImage;
