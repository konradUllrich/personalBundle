import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCTAGGINGTAGSAttributes {
    STRID: string;
    STR_TAGNAME: string;
    B_ISHASHTAG: boolean;
    L_COUNTPOSTS: number;
}

@Table({
	tableName: "LCTAGGINGTAGS",
	timestamps: false 
})
export class LCTAGGINGTAGS extends Model<LCTAGGINGTAGSAttributes, LCTAGGINGTAGSAttributes> implements LCTAGGINGTAGSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRID!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STR_TAGNAME!: string;

    @Column({
    	type: DataType.STRING 
    })
    	B_ISHASHTAG!: boolean;

    @Column({
    	type: DataType.INTEGER 
    })
    	L_COUNTPOSTS!: number;

}