import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ABW_KAT_ABWESENHEITSARTAttributes {
    STR_SCHRIFTFARBE?: string;
    STR_KUERZEL?: string;
    B_BEGRUENDUNGPFLICHT?: boolean;
    DTEDIT?: Date;
    STR_ABWESENHEITSART?: string;
    TXT_HINWEISTEXT?: string;
    B_STUNDENWEISEBUCHUNG?: boolean;
    LUSERID?: number;
    TXT_ARTDERBESCHAEFTIGUNG?: string;
    B_0TAGEBERECHNUNG?: boolean;
    B_BERECHNUNGSRELEVANT?: boolean;
    LUSERIDINSERT?: number;
    STR_SORTIERUNG?: string;
    DTINSERT?: Date;
    STRID: string;
    L_FILEINFORMATION?: number;
    STR_HINTERGRUNDFARBE?: string;
    B_ANTRAGSRELEVANT?: boolean;
}

@Table({
	tableName: "ABW_KAT_ABWESENHEITSART",
	timestamps: false 
})
export class ABW_KAT_ABWESENHEITSART extends Model<ABW_KAT_ABWESENHEITSARTAttributes, ABW_KAT_ABWESENHEITSARTAttributes> implements ABW_KAT_ABWESENHEITSARTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SCHRIFTFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KUERZEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BEGRUENDUNGPFLICHT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ABWESENHEITSART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_HINWEISTEXT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STUNDENWEISEBUCHUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_ARTDERBESCHAEFTIGUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_0TAGEBERECHNUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BERECHNUNGSRELEVANT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HINTERGRUNDFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ANTRAGSRELEVANT?: boolean;

}