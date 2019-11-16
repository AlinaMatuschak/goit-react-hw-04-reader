import React, { Component } from 'react';
import qs from 'qs';
import 'react-toastify/dist/ReactToastify.css';
import { reader } from './Reader.module.css';
import publications from '../../bd/publications.json';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

export default class App extends Component {
  step = 1;

  state = {
    curentPublication: null,
  };

  componentDidMount() {
    const { search } = this.props.location;
    if (!search) this.pushLocationInHistory(this.step);

    const { item } = this.getItemPramsFromProps(this.props);
    if (item > publications.length) {
      this.pushLocationInHistory(publications.length);
      return;
    }
    if (item < this.step) {
      this.pushLocationInHistory(this.step);
      return;
    }
    this.setState({ curentPublication: Number(item) });
  }

  pushLocationInHistory = item =>
    this.props.history.push({
      ...this.props.location,
      search: `item=${item}`,
    });

  getItemPramsFromProps = props => qs.parse(props.location.search.slice(1));

  componentDidUpdate(prevProps) {
    if (this.props.location.search === prevProps.location.search) return;
    const { item } = this.getItemPramsFromProps(this.props);
    this.setState({ curentPublication: Number(item) });
  }

  handlePublication = e =>
    e.target.name === 'next'
      ? this.pushLocationInHistory(this.state.curentPublication + this.step)
      : this.pushLocationInHistory(this.state.curentPublication - this.step);

  render() {
    const { curentPublication } = this.state;
    return (
      <div className={reader}>
        <Controls
          onPublication={this.handlePublication}
          onDecrement={this.handleIncrement}
          index={curentPublication}
          length={publications.length}
          step={this.step}
        />

        <Counter index={curentPublication} length={publications.length} />

        {curentPublication && (
          <Publication
            publication={publications[curentPublication - this.step]}
            number={curentPublication}
          />
        )}
      </div>
    );
  }
}
