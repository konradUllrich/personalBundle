import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_BOARDAttributes {
    LUSERIDINSERT?: number;
    B_BADGETANZEIGEN?: boolean;
    STR_SICHTBARKEIT?: string;
    B_VORLAGE?: boolean;
    DTEDIT?: Date;
    STRID: string;
    STR_BOARDTITEL?: string;
    STR_BOARD3?: string;
    B_LABELSANZEIGEN?: boolean;
    TXT_BOARDMITGLIEDER?: string;
    LUSERID?: number;
    DT_ZIELTERMIN?: Date;
    B_ANZAHLKARTENANZEIGEN?: boolean;
    STR_BOARD4?: string;
    DTINSERT?: Date;
    B_MITGLIEDERANZEIGEN?: boolean;
    STR_MANDANT?: string;
    STR_BOARD5?: string;
    B_TERMINEANZEIGEN?: boolean;
    L_FILEINFORMATION?: number;
    REF_BOARDSTATUS?: string;
    STR_KANBANLINK?: string;
    STR_HINTERGRUNDFARBE?: string;
    STR_SPALTENBREITE?: string;
    B_EMAILNACHRICHTENAKTIVIEREN?: boolean;
    B_ERLEDIGTEKARTENAUSBLENDEN?: boolean;
    REF_BOARDGRUPPE?: string;
    L_ANZAHLKARTEN?: number;
    STR_BOARD2?: string;
    B_MITGLIEDERHINZUFUEGENANZEIGE?: boolean;
}

@Table({
	tableName: "KB_T_BOARD",
	timestamps: false 
})
export class KB_T_BOARD extends Model<KB_T_BOARDAttributes, KB_T_BOARDAttributes> implements KB_T_BOARDAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BADGETANZEIGEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SICHTBARKEIT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_VORLAGE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BOARDTITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BOARD3?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_LABELSANZEIGEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BOARDMITGLIEDER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ZIELTERMIN?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ANZAHLKARTENANZEIGEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BOARD4?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MITGLIEDERANZEIGEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MANDANT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BOARD5?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_TERMINEANZEIGEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BOARDSTATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KANBANLINK?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HINTERGRUNDFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SPALTENBREITE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EMAILNACHRICHTENAKTIVIEREN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ERLEDIGTEKARTENAUSBLENDEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BOARDGRUPPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANZAHLKARTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BOARD2?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MITGLIEDERHINZUFUEGENANZEIGE?: boolean;

}