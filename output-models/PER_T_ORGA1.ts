import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_T_ORGA1Attributes {
    LUSERID?: number;
    STR_SORTIERUNG?: string;
    LUSERIDINSERT?: number;
    STR_EBENE1?: string;
    DTEDIT?: Date;
    DTINSERT?: Date;
    FKSTRID?: string;
    STRID: string;
}

@Table({
	tableName: "PER_T_ORGA1",
	timestamps: false 
})
export class PER_T_ORGA1 extends Model<PER_T_ORGA1Attributes, PER_T_ORGA1Attributes> implements PER_T_ORGA1Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EBENE1?: string;

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
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}