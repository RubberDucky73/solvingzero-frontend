<RenderIf value={rates?.length}>
{rates?.map(
  (rate, idx) =>
    function FindRateVolume({ volume }) {
      const [rateVolume, setRateVolume] = useState('');

      useEffect(() => {
        if (volume < 45) {
          setRateVolume('per day');
        } else {
          setRateVolume('per month');
        }
      }, [volume]);

      if (rateVolume === 'per day' || 'per month') {
        return (
          <GridItem
            gridRow={{ base: '6', md: '6' }}
          >{`Volume Price ${idx + 1}: ${
            rate.volume ?? 'No cap'
          }`}</GridItem>
        );
      }
    }
  // if (rate.volume? < 30)
  // <>
  //   <GridItem gridRow={{ base: '6', md: '6' }}>{`Unit Price ${
  //     idx + 1
  //   }: ${rate.unitPrice}`}</GridItem>
  // </>