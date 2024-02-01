import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_KATEGORIEAttributes {
    STRID: string;
    TXT_CLASS?: string;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    STR_LAYOUT?: string;
    STR_SCHRIFTFARBE?: string;
    STR_HINTERGRUNDFARBE?: string;
    STR_FILTER?: string;
    STR_KATEGORIE?: string;
    FKSTRID?: string;
    DTINSERT?: Date;
}

@Table({
	tableName: "KB_T_B_KATEGORIE",
	timestamps: false 
})
export class KB_T_B_KATEGORIE extends Model<KB_T_B_KATEGORIEAttributes, KB_T_B_KATEGORIEAttributes> implements KB_T_B_KATEGORIEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_CLASS?: string;

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
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_LAYOUT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SCHRIFTFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HINTERGRUNDFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FILTER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KATEGORIE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}