import { ref } from 'vue'

export const useProducts = () => {
  const products = ref([
    {
      id: '1',
      name: 'Low Tension Current Transformers',
      type: 'Low Tension Instruments Transformer',
      voltage: 'Up to 1100V',
      image: '/images/Current.png',
      shortDescription: 'Precision current transformers for metering and protection applications.',
      features: [
        'Primary current rating up to 10,000 Amps',
        'Secondary: 1A, 5A, 0.577A or custom',
        'Multi-core up to 5 cores',
        'Resin casted or tape insulated',
        'Accuracy class up to 0.1'
      ]
    },
    {
      id: '2',
      name: 'Low Tension Potential Transformers',
      type: 'Low Tension Instruments Transformer',
      voltage: 'Up to 1100V',
      image: '/images/demo.png',
      shortDescription: 'Accurate voltage measurement for various applications.',
      features: [
        'Primary voltage rating up to 1100 volts',
        'Secondary: 27V, 63V, 100V, 110V, 120V or custom',
        'Multi-winding up to 3 windings',
        'Thermal burden up to 1kVA',
        'Accuracy class up to 0.1'
      ]
    },
    {
      id: '3',
      name: 'Resin Cast Current Transformers',
      type: 'Medium Voltage Instruments Transformers',
      voltage: 'Up to 33KV',
      image: '/images/outdoor_1.png',
      shortDescription: 'Indoor/outdoor resin cast CTs for medium voltage applications.',
      features: [
        'Up to 33kV system voltage',
        'Primary current up to 10,000A',
        'STC rating: 40kA for 3 seconds',
        'BIL 170kVp insulation',
        'Special accuracy classes available'
      ]
    },
    {
      id: '4',
      name: 'Resin Cast Voltage Transformers',
      type: 'Medium Voltage Instruments Transformers',
      voltage: 'Up to 33KV',
      image: '/images/Indoor.png',
      shortDescription: 'Indoor resin cast VTs for precise voltage measurement.',
      features: [
        'Primary voltage up to 33kV',
        'Single or dual pole options',
        'With or without fuse',
        'Open delta winding possible',
        '1.9 times continuous voltage factor'
      ]
    },
    {
      id: '5',
      name: 'Oil Cooled CT-PT Meter Unit',
      type: 'Oil Cooled Units',
      voltage: 'Up to 33KV',
      image: '/images/Oil_Cooled.png',
      shortDescription: 'Combined CT-PT units for outdoor applications.',
      features: [
        'Primary current up to 6000A',
        'Dead tank or live tank type',
        'IP63 terminal box',
        'STC rating: 40kA for 3 seconds',
        'Copper/Aluminum primary terminals'
      ]
    },
    {
      id: '6',
      name: '',
      type: 'Epoxy Components',
      voltage: 'Up to 33KV',
      image: '/images/Epoxy.png',
      shortDescription: 'High-performance insulation components.',
      features: [
        'LV and MV insulators',
        'Bushings for panel and outdoor',
        'Wall through bushings',
        'Spouts and bus bar supports',
        'Copper/Aluminum/Brass contacts'
      ]
    },
    {
      id: '7',
      name: 'Distribution Transformers',
      type: 'Power Transformers',
      voltage: 'Up to 33KV',
      image: '/images/Distribution.png',
      shortDescription: 'Efficient power distribution solutions.',
      features: [
        '10KVA to 5MVA capacity',
        'Off-load and On-load options',
        'Copper/Aluminum windings',
        'Dyn11, Dyn5, Dyn1 vector groups',
        'BIS-1180 compliant'
      ]
    }
  ])

  return { products }
}