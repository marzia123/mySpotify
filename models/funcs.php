<?php

GLOBAL $Spotify_API;

function parseTopTracks($type, $limit = 30) {
    GLOBAL $Spotify_API;
    $result = $Spotify_API->getMyTop('tracks', array('limit' => $limit, 'time_range' => $type, 'offset' => 0));
    $export = array();
    foreach ($result->items as $queue)
        $export[] = array('name' => $queue->name, 'link' => $queue->album->external_urls->spotify, 'image' => $queue->album->images[0]->url, 'artist' => $queue->artists[0]->name);
    return $export;
}

function parseTopArtists($type, $limit = 30) {
    GLOBAL $Spotify_API;
    $result = $Spotify_API->getMyTop('artists', array('limit' => $limit, 'time_range' => $type, 'offset' => 0));
    $export = array();
    foreach ($result->items as $queue)
        $export[] = array('name' => $queue->name, 'link' => $queue->external_urls->spotify, 'image' => $queue->images[0]->url);
    return $export;
}

function echoTrackPreview($track) {
    echo "
        <div class='col s12 m4 l2'>
            <div class='card'>
                <div class='card-image'>
                    <img class='artist-cover' src='" . $track["image"] . "' height=50>
                    <a class='btn-floating halfway-fab waves-effect waves-light red' href='" . $track['link'] . "' target='_blank'><i class='material-icons'>music_note</i></a>
                </div>
                <div class='card-content'>
                    <p class='song-text'>" . $track["name"] . "</p>
                    <p class='song-text'><b>" . $track["artist"] . "</b></p>
                </div>
            </div>
        </div>
    ";
}

function echoArtistPreview($artist) {
    echo "
        <div class='col s12 m4 l2'>
            <div class='card'>
                <div class='card-image'>
                    <img class='artist-cover' src='" . $artist["image"] . "' height=50>
                    <a class='btn-floating halfway-fab waves-effect waves-light red' href='" . $artist['link'] . "' target='_blank'><i class='material-icons'>music_note</i></a>
                </div>
                <div class='card-content'>
                    <p class='song-text'>" . $artist["name"] . "</p>
                </div>
            </div>
        </div>
    ";
}

?>