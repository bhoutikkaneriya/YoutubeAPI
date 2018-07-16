import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = some key;
// import '../style/style.css';

class App extends Component {
    constructor(props) {
        super();
        this.state = { 
                    videos: [],
                    selectedVideo : null    
                }
                this.videoSearch('Amazon River');
    }

    videoSearch(term) {
        YTSearch({ key:API_KEY, term:term},(videos) => {
            this.setState({
                 videos,
                 selectedVideo:videos[0]
                }); // ES6 => this.setState ({videos:videos})
        })
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},500);
    return (
        <div>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList 
             onSelect = {selectV => this.setState({selectedVideo:selectV})}
             videos={this.state.videos}/>
        </div>
    );
}
}

ReactDOM.render(<App/>,document.getElementById('root'));
