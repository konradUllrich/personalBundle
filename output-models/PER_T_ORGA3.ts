import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_T_ORGA3Attributes {
    STRID: string;
    STR_EBENE3?: string;
    STR_SORTIERUNG?: string;
    DTEDIT?: Date;
    FKSTRID?: string;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    LUSERID?: number;
}

@Table({
	tableName: "PER_T_ORGA3",
	timestamps: false 
})
export class PER_T_ORGA3 extends Model<PER_T_ORGA3Attributes, PER_T_ORGA3Attributes> implements PER_T_ORGA3Attributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EBENE3?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

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

}