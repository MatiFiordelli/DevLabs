import { useEffect, useState } from "react";

export default function useMic(localEntry, setLocalEntry) {
    const [isMicActive, setisMicActive] = useState(false)
	const [transcript, setTranscript] = useState("")


    useEffect(() => {
		setTranscript("")
        let recognition;
		let transcription = ''

        if (isMicActive) {
            recognition = new webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
			recognition.lang = 'en-US';
			
			let previousTranscript 
			recognition.onstart = () => {
				previousTranscript = transcript + ' '
			}
            recognition.onresult = (event) => {
				transcription = previousTranscript + Array.from(event.results)
					.map((result) => result[0].transcript)
					.join("");
				if(transcription.length > 50) {
					transcription = transcription.slice(0, 50)
				} else {
					setTranscript(transcription.trim())
				}
			}
        };

		recognition?.start();

		return () => {
			recognition?.stop();
		};

    }, [isMicActive]);

	useEffect(()=>{
		setLocalEntry({
			...localEntry,
			entryText: transcript
		})
	},[transcript])


	const toggleMicHandler = (e) => {
		setisMicActive(!isMicActive)
	}

	const onChangeHandler = (e) => {	
		setTranscript(e.target.value || "")	
		/* if(isMicActive) {
			alert("You can only type or delete when the microphone button is turned off.")
		}		 */
	}

	const clickAddButtonHandler = () => {
		setisMicActive(false)
		setTimeout(()=>{
			if (transcript.length >= 3 && transcript.length <= 50) {
				setTranscript("")	
			}			
		}, 200)		
	}

    return {
        isMicActive,
        transcript, 
        onChangeHandler,
        toggleMicHandler,
		clickAddButtonHandler
    }
}