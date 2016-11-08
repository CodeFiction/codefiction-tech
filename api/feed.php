<?php
    namespace Codefiction;

    define('RSS_FEED', 'http://feeds.soundcloud.com/users/soundcloud:users:264614350/sounds.rss');

    class PodcastObject{
        public $title;
        public $url;
        public $duration;
    }

    class PodcastReader {
        private $xmlDoc;

        public function Load($url = RSS_FEED){
            $xml = ($url);
            $this->xmlDoc = new \DOMDocument();
            $this->xmlDoc->load($xml);
            return $this;
        }

        public function ToJson(){
            $response = [];
            $channel = $this->xmlDoc->getElementsByTagName('channel')->item(0);

            $items = $channel->getElementsByTagName('item');
            $xpath = new \DOMXPath($this->xmlDoc);

            foreach($items as $item) {
                $currentObject = new PodcastObject();
                $currentObject->title = $item->getElementsByTagName('title')->item(0)->nodeValue;
                $currentObject->url = $item->getElementsByTagName('link')->item(0)->nodeValue;
                $currentObject->duration = $xpath->query("itunes:duration", $item)->item(0)->nodeValue;
                $response[] = $currentObject;
            }

            return json_encode(array_reverse($response));
        }
    }

    $reader = new PodcastReader();
    $result = $reader->Load()->ToJson();
    header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
    header("Pragma: no-cache"); // HTTP/1.0
    header('Content-Type: application/json');
    print $result;