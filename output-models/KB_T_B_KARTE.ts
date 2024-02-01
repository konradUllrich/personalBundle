import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_KARTEAttributes {
    DTEDIT?: Date;
    L_ANZAHLKOMMENTARE?: number;
    L_FILEINFORMATION_1?: number;
    STR_KARTENTITEL?: string;
    REF_SPALTE?: string;
    B_DUMMY?: boolean;
    STR_LINKVERKNUEPFTEKARTEN?: string;
    L_ANZAHLVERKNUEPFTEKARTEN?: number;
    L_TAGEBISFAELLIGKEIT?: number;
    REF_PRIO?: string;
    L_ANZAHLITEMS?: number;
    B_LOCKED?: boolean;
    REF_STATUS?: string;
    TYPE?: string;
    LUSERIDINSERT?: number;
    B_OBENANPINNEN?: boolean;
    DT_ERINNERUNGSDATUM?: Date;
    REF_872CCA36?: string;
    L_ANZAHLITEMSERLEDIGT?: number;
    FKSTRID?: string;
    B_AUSBLENDEN?: boolean;
    DT_FAELLIGKEITSDATUM?: Date;
    DT_STARTDATUM?: Date;
    TXT_NOTIZEN?: string;
    LUSERID?: number;
    B_ERSTEKARTE?: boolean;
    L_ANZAHLANHAENGE?: number;
    L_LOCKEDUSER?: number;
    DTINSERT?: Date;
    L_FILEINFORMATION?: number;
    STR_ANZAHLITEMS?: string;
    B_NOTIZAUFKARTEANZEIGEN?: boolean;
    STRID: string;
    B_KOMMENTAREAUFKARTEANZEIGEN?: boolean;
    L_ORDER?: number;
    STR_BOARDLINK?: string;
    B_CHECKLISTEAUFKARTEANZEIGEN?: boolean;
    REF_KATEGORIE?: string;
}

@Table({
	tableName: "KB_T_B_KARTE",
	timestamps: false 
})
export class KB_T_B_KARTE extends Model<KB_T_B_KARTEAttributes, KB_T_B_KARTEAttributes> implements KB_T_B_KARTEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLKOMMENTARE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION_1?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KARTENTITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_SPALTE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DUMMY?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_LINKVERKNUEPFTEKARTEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLVERKNUEPFTEKARTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_TAGEBISFAELLIGKEIT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PRIO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLITEMS?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_LOCKED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	TYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_OBENANPINNEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ERINNERUNGSDATUM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_872CCA36?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLITEMSERLEDIGT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_AUSBLENDEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_FAELLIGKEITSDATUM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_STARTDATUM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_NOTIZEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ERSTEKARTE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLANHAENGE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_LOCKEDUSER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANZAHLITEMS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_NOTIZAUFKARTEANZEIGEN?: boolean;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_KOMMENTAREAUFKARTEANZEIGEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ORDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BOARDLINK?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_CHECKLISTEAUFKARTEANZEIGEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_KATEGORIE?: string;

}