import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XCALPERSONAL_CATEGORYDDBAttributes {
    LID: number;
    DTEDIT?: Date;
    DTINSERT?: Date;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    STR_FARBE_543A95F2?: string;
    STR_KATEGORIE_C0FB163D?: string;
    STR_SCHRIFTFARBE_73F25213?: string;
}

@Table({
	tableName: "XCALPERSONAL_CATEGORYDDB",
	timestamps: false 
})
export class XCALPERSONAL_CATEGORYDDB extends Model<XCALPERSONAL_CATEGORYDDBAttributes, XCALPERSONAL_CATEGORYDDBAttributes> implements XCALPERSONAL_CATEGORYDDBAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FARBE_543A95F2?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KATEGORIE_C0FB163D?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SCHRIFTFARBE_73F25213?: string;

}