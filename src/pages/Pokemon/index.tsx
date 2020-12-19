import { navigate } from 'hookrouter';
import React from 'react';
import cn from 'classnames';
import Loader from '../../components/Loader';
import { colorTypes, IPokemonCard } from '../../components/PokemonCard/PokemonCard.entities';
import Heading from '../../components/_common/Heading';
import Popup from '../../components/_common/Popup';
import useData from '../../hooks/getData';
import { LinkRoutes } from '../../routes';
import getColorCode from '../../utils/getColorCode';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';
import PokedexPage from '../Pokedex';
import s from './Pokemon.module.scss';
import ProgressBar from '../../components/_common/ProgressBar';

export interface IPokemonPageProps {
  id: string | number;
}

const PokemonPage: React.FC<IPokemonPageProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemonCard>('getPokemon', { id });
  const cardColor = data?.types[0];
  const cardTitle = data?.name || ``;

  if (isLoading) {
    return <Loader />;
  }

  const navigateBack = () => navigate(`${LinkRoutes.POKEDEX}`);

  return (
    <>
      <PokedexPage />
      <Popup isActive={Boolean(id)} onClick={navigateBack}>
        <section className={s.root} style={{ background: getColorCode(cardColor as string, colorTypes) }}>
          <div className={s.imageBlock}>
            <Heading level={3}>{toCapitalizeFirstLetter(cardTitle)}</Heading>
            <img className={s.pokemonImage} src={data?.img} alt={data?.name} />
            <div className={s.imageFooter}>
              <div className={cn(s.weightWrapper, s.weightMobile)}>
                <span className={s.weigthCircle}>{data?.weight}</span>
                Generation 1
              </div>
              <div className={s.labelBlock}>
                {data?.types.map((type: any) => (
                  <span key={type} className={s.label} style={{ background: getColorCode(type, colorTypes) }}>
                    {toCapitalizeFirstLetter(type)}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={s.cardContentBlock}>
            <section className={s.contentHeader}>
              <Heading level={4}>{toCapitalizeFirstLetter(cardTitle)}</Heading>
              <div className={cn(s.weightWrapper, s.weightNotMobile)}>
                <span className={s.weigthCircle}>{data?.weight}</span>
                Generation 1
              </div>
            </section>
            <section className={cn(s.cloud, s.cloudAbilities)}>
              <h3 className={s.title}>Abilities</h3>
              <p className={s.abilitiesWrapper}>
                {data?.abilities?.map((abilitie: string) => (
                  <span key={abilitie} className={s.tag}>
                    <span className={s.name}>{toCapitalizeFirstLetter(abilitie)}</span>
                    <span className={s.dot}>&nbsp;-&nbsp;</span>
                  </span>
                ))}
              </p>
            </section>
            <div className={cn(s.cloud, s.cloudExpWrapper)}>
              <section className={s.cloudExp}>
                <h4 className={s.name}>Healthy Points</h4>
                <p className={s.value}>{data?.stats.hp}</p>
                <ProgressBar currentValue={data?.stats.hp || 0} maxValue={100} />
              </section>
              <section className={s.cloudExp}>
                <h4 className={s.name}>Experience</h4>
                <p className={s.value}>{data?.base_experience}</p>
                <ProgressBar currentValue={data?.base_experience || 0} maxValue={1000} />
              </section>
            </div>
            <div className={s.cloudWrapper}>
              <div className={cn(s.cloud, s.stat)}>
                <span className={s.circle}>{data?.stats.defense}</span>
                <span>Defense</span>
              </div>
              <div className={cn(s.cloud, s.stat)}>
                <span className={s.circle}>{data?.stats.attack}</span>
                <span>Attack</span>
              </div>
              <div className={cn(s.cloud, s.stat)}>
                <span className={s.circle}>{data?.stats['special-defense']}</span>
                <span>SP Defense</span>
              </div>
              <div className={cn(s.cloud, s.stat)}>
                <span className={s.circle}>{data?.stats['special-attack']}</span>
                <span>SP Attack</span>
              </div>
            </div>
          </div>
        </section>
      </Popup>
    </>
  );
};

export default PokemonPage;
